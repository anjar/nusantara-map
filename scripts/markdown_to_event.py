#!/usr/bin/env python3
"""Extract a reviewable Nusantara timeline event draft from a Markdown article."""

import argparse
import hashlib
import json
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import urlparse


CATEGORIES = {
    'sea-level', 'climate', 'geology', 'disaster', 'kingdom', 'war',
    'diplomacy', 'figure', 'colonial', 'independence', 'disease',
    'politics', 'culture', 'violence',
}
PERIODS = {
    'glaciation', 'deglaciation', 'post-glacial', 'holocene', 'kingdom',
    'colonial', 'independence', 'republic',
}
REGIONS = {
    'Sunda', 'Sahul', 'Jawa', 'Sumatera', 'Kalimantan', 'Sulawesi',
    'Bali', 'Maluku', 'Papua', 'Nusa Tenggara', 'Nasional',
}
EVIDENCE = {'documented', 'approximate', 'contested', 'reconstruction'}
STOP_HEADINGS = {
    'referensi', 'references', 'catatan kaki', 'notes', 'pranala luar',
    'external links', 'bacaan lanjutan', 'further reading', 'lihat pula',
    'see also', 'daftar pustaka', 'bibliography',
}
CATEGORY_HINTS = (
    ('war', r'\b(perang|pertempuran|pemberontakan|invasi|penyerbuan)\b'),
    ('disaster', r'\b(letusan|erupsi|gempa|tsunami|banjir|bencana)\b'),
    ('disease', r'\b(wabah|epidemi|pandemi|penyakit)\b'),
    ('independence', r'\b(proklamasi|kemerdekaan|pengakuan kedaulatan)\b'),
    ('diplomacy', r'\b(perjanjian|konferensi|diplomasi|perundingan)\b'),
    ('kingdom', r'\b(kerajaan|kesultanan|kemaharajaan|dinasti|raja|ratu|prasasti)\b'),
    ('figure', r'\b(tokoh|raja|ratu|pahlawan|lahir|wafat)\b'),
    ('politics', r'\b(kudeta|pemilu|presiden|reformasi|pemerintahan)\b'),
    ('colonial', r'\b(voc|kolonial|penjajahan|hindia belanda)\b'),
    ('geology', r'\b(glasial|sungai purba|paparan sunda|geologi)\b'),
    ('culture', r'\b(kebudayaan|candi|kongres|sumpah|pendidikan|surat kabar|karya)\b'),
)
MONTHS = {
    'januari': '01', 'februari': '02', 'maret': '03', 'april': '04',
    'mei': '05', 'juni': '06', 'juli': '07', 'agustus': '08',
    'september': '09', 'oktober': '10', 'november': '11', 'desember': '12',
}
TIMELINE_STOP_HEADINGS = {'pranala luar', 'external links', 'referensi', 'references'}
MARKDOWN_LINK = re.compile(r'(?<!!)\[([^\]]+)\]\((https?://(?:[^()]|\\.)+)\)')


def parse_frontmatter(markdown):
    lines = markdown.splitlines()
    if not lines or lines[0].strip() != '---':
        return {}, markdown
    end = next((i for i, line in enumerate(lines[1:], 1) if line.strip() == '---'), None)
    if end is None:
        return {}, markdown

    metadata = {}
    for line in lines[1:end]:
        match = re.match(r'^([A-Za-z][\w-]*)\s*:\s*(.*)$', line)
        if not match:
            continue
        key, value = match.groups()
        value = value.strip()
        if value.startswith('[') and value.endswith(']'):
            value = [part.strip().strip('\"\'') for part in value[1:-1].split(',') if part.strip()]
        else:
            value = value.strip('\"\'')
        metadata[key.lower().replace('-', '_')] = value
    return metadata, '\n'.join(lines[end + 1:])


def parse_year(value):
    if value is None or value == '':
        return None
    if isinstance(value, int):
        year = value
    else:
        text = str(value).strip()
        bce = bool(re.search(r'\b(SM|BCE|BC|Sebelum Masehi)\b', text, re.I))
        digits = re.sub(r'[^\d-]', '', text)
        if not re.fullmatch(r'-?\d+', digits):
            raise ValueError(f'Tahun tidak terbaca: {value!r}; gunakan 1945 atau -18000.')
        year = int(digits)
        if bce and year > 0:
            year = -year
    if year == 0:
        raise ValueError('Gunakan kalender astronomis tanpa tahun 0: 1 SM ditulis -1.')
    return year


def infer_period(year):
    if year <= -11501:
        return 'glaciation'
    if year <= -9501:
        return 'deglaciation'
    if year < 0:
        return 'post-glacial'
    if year < 400:
        return 'holocene'
    if year < 1500:
        return 'kingdom'
    if year < 1945:
        return 'colonial'
    if year < 1950:
        return 'independence'
    return 'republic'


def clean_inline(text):
    text = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', text)
    text = re.sub(r'\[\^?\w+\]', '', text)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'[`*_~]', '', text)
    return re.sub(r'\s+', ' ', text).strip()


def extract_title(metadata, body):
    if metadata.get('title'):
        return clean_inline(str(metadata['title']))
    for line in body.splitlines():
        match = re.match(r'^#\s+(.+?)\s*#*$', line.strip())
        if match:
            return clean_inline(match.group(1))
    return ''


def extract_summary(metadata, body):
    if metadata.get('summary'):
        return clean_inline(str(metadata['summary']))

    paragraphs = []
    current = []
    for line in body.splitlines():
        stripped = line.strip()
        if stripped.startswith('#'):
            if current:
                paragraphs.append(clean_inline(' '.join(current)))
                current = []
            heading = re.sub(r'^#+\s*', '', stripped).strip().lower()
            if heading in STOP_HEADINGS:
                break
            continue
        if not stripped or stripped.startswith(('![', '|', '```', '>', '---')):
            if current:
                paragraphs.append(clean_inline(' '.join(current)))
                current = []
            continue
        if re.match(r'^\s*(?:source(?:\s+url)?|url(?: sumber)?|canonical url|original url|sumber)\s*:', stripped, re.I):
            continue
        if re.match(r'^\[[^\]]+\]:\s*https?://', stripped):
            continue
        current.append(stripped)
    if current:
        paragraphs.append(clean_inline(' '.join(current)))

    paragraphs = [paragraph for paragraph in paragraphs if paragraph and not paragraph.startswith('http')]
    summary = ' '.join(paragraphs[:2])
    if len(summary) > 600:
        summary = summary[:597].rsplit(' ', 1)[0].rstrip('.,;:') + '…'
    return summary


def extract_source_url(metadata, body, override):
    candidates = [override]
    candidates.extend(metadata.get(key) for key in ('source_url', 'canonical_url', 'original_url', 'url', 'source'))
    for line in body.splitlines()[:15]:
        match = re.match(
            r'^\s*(?:source(?:\s+url)?|url(?: sumber)?|canonical url|original url|sumber)\s*:\s*(.+?)\s*$',
            line,
            re.I,
        )
        if match:
            candidates.append(match.group(1))
    for value in candidates:
        if not value:
            continue
        match = re.search(r'https://[^\s)>]+', str(value))
        if match:
            url = match.group(0).rstrip('.,;]')
            parsed = urlparse(url)
            if parsed.scheme == 'https' and parsed.hostname:
                return url
    return None


def guess_category(title, summary):
    text = f'{title} {summary}'.lower()
    for category, pattern in CATEGORY_HINTS:
        if re.search(pattern, text, re.I):
            return category
    return None


def decode_markdown_url(url):
    return re.sub(r'\\([()])', r'\1', url).replace('&amp;', '&')


def timeline_links(text):
    links = []
    seen = set()
    for label, raw_url in MARKDOWN_LINK.findall(text):
        url = decode_markdown_url(raw_url).rstrip('.,;]')
        parsed = urlparse(url)
        if not parsed.hostname or parsed.scheme != 'https' or parsed.fragment.startswith('cite_'):
            continue
        if parsed.hostname.endswith('wikipedia.org'):
            page = parsed.path.rsplit('/', 1)[-1]
            if page.startswith(('Kategori:', 'Category:', 'Special:', 'Templat:', 'Template:')):
                continue
            if re.fullmatch(r'\d{1,4}', page):
                continue
        if url not in seen:
            links.append({'title': clean_inline(label), 'url': url})
            seen.add(url)
    return links


def parse_quantity(text):
    text = text.strip().replace(',', '.')
    million = bool(re.search(r'\bjuta\b', text, re.I))
    numeric = re.search(r'\d[\d.]*', text)
    if not numeric:
        return None
    digits = numeric.group(0).replace('.', '')
    value = int(digits)
    return value * (1_000_000 if million else 1)


def convert_timeline_year(value, era):
    if era in {'sm', 'bce', 'bc', 'sebelum masehi'}:
        return -value
    if era == 'bp':
        return 1950 - value
    return value


def parse_timeline_label(label, current_year=None):
    """Return date metadata for a standalone chronology label, if recognized."""
    cleaned = clean_inline(label).strip().replace('−', '-').replace('–', '-').replace('—', '-')
    normalized = re.sub(r'\s+', ' ', cleaned).lower()
    if not normalized or normalized in {'tahun', 'tanggal', 'peristiwa'}:
        return None

    if normalized in {'pleistosen', 'holosen', 'paleolitik', 'mesolitik', 'neolitik'}:
        return {
            'year': None, 'end_year': None, 'label': cleaned, 'approximate': True,
            'note': f'Sumber hanya menyebut periode luas "{cleaned}"; tahun tidak ditentukan otomatis.',
        }

    era_match = re.search(r'\b(sebelum masehi|sm|bce|bc|bp)\b', normalized)
    era = era_match.group(1) if era_match else None

    # A century label locates an event approximately within the named century.
    century = re.fullmatch(r'(?:(awal|pertengahan|tengah|akhir)\s+)?abad(?:\s+ke-?)?\s*(\d{1,2})(?:\s+(sm|bce|bc))?', normalized)
    if century:
        phase, ordinal, century_era = century.groups()
        ordinal = int(ordinal)
        offset = 25 if phase == 'awal' else 50 if phase in {'pertengahan', 'tengah'} else 75
        year = (ordinal - 1) * 100 + offset
        if century_era:
            year = -year
        return {
            'year': year, 'end_year': None, 'label': cleaned,
            'approximate': True, 'note': f'Tanggal sumber hanya menyebut {cleaned}; tahun dipetakan ke bagian tengah periode untuk penempatan visual.',
        }

    # A decade/century span such as "1200-an" stays a range in the draft.
    span = re.fullmatch(r'(~\s*)?(\d{3,4})-an(?:\s+(sm|bce|bc))?', normalized)
    if span:
        _, raw_start, span_era = span.groups()
        start = int(raw_start)
        end = start + 99
        if span_era:
            start, end = -end, -start
        return {
            'year': start, 'end_year': end, 'label': cleaned,
            'approximate': True, 'note': f'Tanggal sumber hanya menyebut rentang {cleaned}; tahun awal dipakai untuk urutan timeline.',
        }

    # Month/day labels inherit the last explicit year in the table.
    day_month = re.fullmatch(r'(\d{1,2})\s+([a-z]+)(?:\s*[-/]\s*(\d{1,2})\s+([a-z]+))?', normalized)
    if day_month and day_month.group(2) in MONTHS:
        year = current_year
        month = MONTHS[day_month.group(2)]
        day = int(day_month.group(1))
        iso_date = f'{year:04d}-{month}-{day:02d}' if year is not None and year >= 0 else None
        return {
            'year': year, 'end_year': None, 'date': iso_date, 'label': cleaned,
            'approximate': year is None,
            'note': f'Tanggal sumber: {cleaned}.' if year is not None else f'Tanggal sumber {cleaned} tidak menyertakan tahun.',
        }

    # Human-time expressions used in prehistoric sections.
    human_time = re.fullmatch(r'(~\s*)?(\d[\d.]*(?:\s*juta)?)\s*(?:tahun\s+lalu)?', normalized)
    if human_time and ('juta' in normalized or 'tahun lalu' in normalized):
        quantity = parse_quantity(human_time.group(2))
        if quantity is not None:
            year = -quantity if quantity > 5000 else convert_timeline_year(quantity, era)
            return {
                'year': year, 'end_year': None, 'label': cleaned,
                'approximate': True, 'note': f'Waktu sumber berupa perkiraan: {cleaned}.',
            }

    # Number/range labels, with optional SM/BP suffix. Examples: 1945, 1803–1838, 45.000 SM.
    number = r'\d[\d.]*'
    quantity = rf'{number}(?:\s*juta)?'
    range_match = re.fullmatch(
        rf'(~\s*)?({quantity})(?:\s*(?:sampai|hingga|ke|-|/)\s*({quantity}))?\s*(sm|bce|bc|bp|sebelum masehi)?',
        normalized,
    )
    if range_match:
        approximate_mark, first_text, second_text, range_era = range_match.groups()
        first = parse_quantity(first_text)
        second = parse_quantity(second_text) if second_text else None
        if first is not None:
            used_era = range_era or era
            year = convert_timeline_year(first, used_era)
            end_year = convert_timeline_year(second, used_era) if second is not None else None
            note = None
            approximate = bool(approximate_mark or second is not None or 'juta' in normalized or used_era == 'bp')
            if approximate:
                note = f'Tanggal sumber berupa perkiraan atau rentang: {cleaned}.'
            return {
                'year': year, 'end_year': end_year, 'label': cleaned,
                'approximate': approximate, 'note': note,
            }

    return None


def timeline_row_title(text):
    cleaned = clean_inline(text)
    cleaned = re.sub(r'\s*\[\d+\]\s*', ' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    if not cleaned:
        return ''
    # A first sentence is compact enough for map cards while the full row remains in summary.
    sentence = re.split(r'(?<=[.!?])\s+(?=[A-Z0-9\[])', cleaned, maxsplit=1)[0]
    if len(sentence) > 140:
        sentence = sentence[:137].rsplit(' ', 1)[0].rstrip('.,;:') + '…'
    return sentence


def infer_region(text):
    checks = (
        ('Nusa Tenggara', r'\b(nusa tenggara|flores|timor|lombok|sumbawa)\b'),
        ('Sumatera', r'\b(sumatera|sumatra|aceh|jambi|palembang|bengkulu)\b'),
        ('Kalimantan', r'\b(kalimantan|borneo|tarakan)\b'),
        ('Sulawesi', r'\b(sulawesi|celebes|makassar|gowa)\b'),
        ('Maluku', r'\b(maluku|ternate|tidore|ambon|banda)\b'),
        ('Papua', r'\b(papua|irian|biak)\b'),
        ('Bali', r'\b(bali|badung|karangasem)\b'),
        ('Jawa', r'\b(jawa|jakarta|batavia|banten|surabaya|yogyakarta|semarang|bandung|mataram)\b'),
        ('Nasional', r'\b(indonesia|nusantara|hindia belanda)\b'),
    )
    lowered = text.lower()
    for region, pattern in checks:
        if re.search(pattern, lowered):
            return region
    return None


def make_timeline_event(text, time_info, source_url, source_title, source_name, markdown_path):
    title = timeline_row_title(text)
    summary = clean_inline(text)
    if len(summary) > 600:
        summary = summary[:597].rsplit(' ', 1)[0].rstrip('.,;:') + '…'
    year = time_info.get('year')
    end_year = time_info.get('end_year')
    category = guess_category(title, summary)
    period = infer_period(year) if year is not None else None
    explicit_links = timeline_links(text)
    sources = []
    for link in explicit_links[:4]:
        parsed = urlparse(link['url'])
        name = 'Wikipedia' if parsed.hostname.endswith('wikipedia.org') else parsed.hostname
        sources.append({'title': link['title'] or source_title, 'url': link['url'], 'sourceName': name})
    if source_url and all(source['url'] != source_url for source in sources):
        sources.append({'title': source_title, 'url': source_url, 'sourceName': source_name})

    digest = hashlib.sha256(f'{source_url}\n{time_info.get("label")}\n{summary}'.encode()).hexdigest()[:8]
    event_id = f'draft-{slug(title)}-{year if year is not None else "undated"}-{digest}'
    event = {
        'id': event_id,
        'year': year,
        'period': period,
        'category': category,
        'title': title,
        'summary': summary,
        'impact': '',
        'tags': [],
        'sources': sources,
    }
    if end_year is not None:
        event['endYear'] = end_year
    if time_info.get('date'):
        event['date'] = time_info['date']
    note = time_info.get('note')
    if not note and time_info.get('label'):
        note = f'Tanggal sumber: {time_info["label"]}; presisi penanggalan perlu ditinjau.'
    if note:
        event['dateNote'] = note
    region = infer_region(summary)
    if region:
        event['region'] = region
    if time_info.get('approximate'):
        event['evidence'] = 'approximate'
    elif year is not None:
        event['evidence'] = 'documented'

    missing = [
        field for field, value in (
            ('year', year), ('period', period), ('category', category),
            ('title', title), ('summary', summary), ('impact', event['impact']),
            ('tags', event['tags']), ('event_detail_source', explicit_links),
        ) if value is None or value == '' or value == []
    ]
    warnings = [
        'Draf diekstrak otomatis dari baris timeline Wikipedia; verifikasi fakta dan sumber detail sebelum dipublikasikan.',
        'Ringkasan mengikuti teks sumber dan perlu ditulis ulang setelah pemeriksaan lisensi/atribusi.',
    ]
    if category:
        warnings.append(f'Kategori "{category}" ditebak dari kata kunci; konfirmasi sebelum dipublikasikan.')
    if region:
        warnings.append(f'Wilayah "{region}" ditebak dari nama tempat; konfirmasi sebelum dipublikasikan.')
    if explicit_links:
        warnings.append('Tautan dari baris dipertahankan sebagai kandidat sumber; sebagian mungkin hanya pranala entitas, bukan bacaan detail.')
    if not explicit_links:
        warnings.append('Baris tidak memuat pranala detail; hanya URL artikel timeline yang disertakan.')
    if time_info.get('label') and time_info.get('approximate'):
        warnings.append(f'Penanggalan "{time_info["label"]}" bersifat perkiraan atau rentang.')

    return {
        'review_status': 'pending',
        'source_markdown': str(markdown_path),
        'missing_required_fields': missing,
        'warnings': warnings,
        'event': event,
    }


def make_timeline_drafts(markdown, markdown_path, options):
    metadata, body = parse_frontmatter(markdown)
    source_url = extract_source_url(metadata, body, options.get('source_url'))
    if not source_url:
        raise ValueError('URL sumber tidak ditemukan. Tambahkan source_url di frontmatter atau pakai --source-url.')
    parsed_source = urlparse(source_url)
    source_name = options.get('source_name') or metadata.get('source_name')
    if not source_name:
        source_name = 'Wikipedia' if parsed_source.hostname.endswith('wikipedia.org') else parsed_source.hostname
    source_title = options.get('source_title') or metadata.get('source_title') or extract_title(metadata, body) or 'Artikel timeline'

    events = []
    section = None
    current_year = None
    pending_time = None
    for line in body.splitlines():
        stripped = line.strip()
        heading = re.match(r'^#{2,6}\s+(.+?)\s*#*$', stripped)
        if heading:
            section = clean_inline(heading.group(1)).lower()
            if section in TIMELINE_STOP_HEADINGS:
                break
            section_time = parse_timeline_label(heading.group(1))
            if section_time and section_time.get('year') is not None:
                current_year = section_time['year']
                pending_time = section_time
            else:
                current_year = None
                pending_time = None
            continue
        if section is None or not stripped or stripped.startswith(('---', '```', '>')):
            continue
        if section in TIMELINE_STOP_HEADINGS:
            break

        # Accept regular GitHub-flavored Markdown tables as well as copied Wikipedia cells.
        if stripped.startswith('|') and stripped.endswith('|'):
            cells = [cell.strip() for cell in stripped.strip('|').split('|')]
            plain_cells = [clean_inline(cell) for cell in cells]
            if not plain_cells or any(re.fullmatch(r':?-{2,}:?', cell) for cell in plain_cells):
                continue
            if any(cell.lower() in {'tahun', 'tanggal', 'peristiwa'} for cell in plain_cells):
                continue
            time_info = None
            for cell in plain_cells[:2]:
                candidate = parse_timeline_label(cell, current_year)
                if candidate:
                    if candidate.get('year') is not None:
                        current_year = candidate['year']
                    if time_info is None or candidate.get('date'):
                        time_info = candidate
            description_cells = [cell for cell in cells if clean_inline(cell) and not parse_timeline_label(clean_inline(cell), current_year)]
            event_text = ' '.join(description_cells).strip()
            if event_text:
                time_info = time_info or {'year': current_year, 'label': str(current_year) if current_year is not None else None, 'approximate': True}
                events.append(make_timeline_event(event_text, time_info, source_url, source_title, source_name, markdown_path))
            continue

        if stripped.lower() in {'tahun', 'tanggal', 'peristiwa', 'tampil'}:
            continue
        date_info = parse_timeline_label(stripped, current_year)
        if date_info:
            if date_info.get('year') is not None:
                current_year = date_info['year']
            pending_time = date_info
            continue

        # A few exports put the date at the start of the same paragraph as its text.
        inline_date = re.match(r'^((?:~\s*)?\d[\d.,]*(?:\s*juta)?(?:\s*(?:sampai|hingga|[-–—])\s*\d[\d.,]*(?:\s*juta)?)?\s*(?:SM|BCE|BC|BP|sebelum Masehi)?)(?:\s+[-–—:]?\s+)(.+)$', stripped, re.I)
        if inline_date:
            inline_time = parse_timeline_label(inline_date.group(1), current_year)
            if inline_time:
                current_year = inline_time.get('year', current_year)
                pending_time = inline_time
                stripped = inline_date.group(2).strip()

        # Ignore list/footer material and paragraphs that are only navbox controls.
        event_text = stripped
        title = timeline_row_title(event_text)
        if not title or title.lower() in {'dari wikipedia bahasa indonesia, ensiklopedia bebas'}:
            continue
        time_info = pending_time or {
            'year': current_year,
            'end_year': None,
            'label': str(current_year) if current_year is not None else None,
            'approximate': current_year is None,
            'note': 'Tahun tidak ditemukan pada baris; perlu ditinjau.' if current_year is None else None,
        }
        events.append(make_timeline_event(event_text, time_info, source_url, source_title, source_name, markdown_path))
        pending_time = None

    if not events:
        raise ValueError('Tidak ada baris peristiwa yang dikenali. Pastikan file memiliki heading timeline seperti ## Prasejarah dan isi artikel setelahnya.')

    result = {
        'review_status': 'pending',
        'source_markdown': str(markdown_path),
        'source_url': source_url,
        'source_title': source_title,
        'event_count': len(events),
        'events': events,
        'warnings': [
            'Semua entri adalah draf. Parser tidak memverifikasi klaim sejarah atau apakah pranala adalah sumber detail.',
            'Format Wikipedia dapat memuat rentang, abad, tanggal tidak lengkap, dan sengketa historiografi; tinjau tiap entri sebelum promosi.',
        ],
    }
    if parsed_source.hostname.endswith('wikipedia.org'):
        result['source_license'] = 'CC BY-SA 4.0'
        result['source_license_url'] = 'https://creativecommons.org/licenses/by-sa/4.0/'
        result['warnings'].append('Konten yang diturunkan dari Wikipedia memerlukan atribusi dan pemenuhan CC BY-SA; periksa kewajiban sebelum publikasi.')
    return result


def slug(value):
    ascii_text = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', ascii_text)).strip('-') or 'event'


def make_draft(markdown, markdown_path, options):
    metadata, body = parse_frontmatter(markdown)
    title = extract_title(metadata, body)
    summary = extract_summary(metadata, body)
    source_url = extract_source_url(metadata, body, options.get('source_url'))
    if not source_url:
        raise ValueError('URL sumber tidak ditemukan. Tambahkan source_url di frontmatter atau pakai --source-url.')

    year_value = options.get('year') if options.get('year') is not None else metadata.get('year')
    year = parse_year(year_value)
    period = options.get('period') or metadata.get('period') or (infer_period(year) if year is not None else None)
    explicit_category = options.get('category') or metadata.get('category')
    category = explicit_category or guess_category(title, summary)
    region = options.get('region') or metadata.get('region')
    impact = options.get('impact') or metadata.get('impact') or ''
    evidence = options.get('evidence') or metadata.get('evidence')
    tags = options.get('tags') or metadata.get('tags') or []
    if isinstance(tags, str):
        tags = [tag.strip() for tag in tags.split(',') if tag.strip()]

    for field, value, allowed in (
        ('period', period, PERIODS),
        ('category', category, CATEGORIES),
        ('region', region, REGIONS),
    ):
        if value is not None and value not in allowed:
            raise ValueError(f'{field} tidak dikenal: {value!r}. Pilihan: {", ".join(sorted(allowed))}')
    if evidence is not None and evidence not in EVIDENCE:
        raise ValueError(f'evidence harus salah satu dari: {", ".join(sorted(EVIDENCE))}')

    parsed_source = urlparse(source_url)
    source_name = options.get('source_name') or metadata.get('source_name')
    if not source_name:
        source_name = 'Wikipedia' if parsed_source.hostname.endswith('wikipedia.org') else parsed_source.hostname
    source_title = options.get('source_title') or metadata.get('source_title') or title or parsed_source.hostname
    digest = hashlib.sha256(f'{source_url}\n{title}'.encode()).hexdigest()[:8]
    event_id = metadata.get('id') or f'draft-{slug(title)}-{year if year is not None else digest}-{digest}'

    event = {
        'id': event_id,
        'year': year,
        'period': period,
        'category': category,
        'title': title,
        'summary': summary,
        'impact': impact,
        'tags': tags,
        'sources': [{'title': source_title, 'url': source_url, 'sourceName': source_name}],
    }
    if region:
        event['region'] = region
    if evidence:
        event['evidence'] = evidence

    missing = [
        field for field, value in (
            ('year', year), ('period', period), ('category', category),
            ('title', title), ('summary', summary), ('impact', impact), ('tags', tags),
        ) if value is None or value == '' or value == []
    ]
    warnings = ['Draf otomatis; periksa klaim, tahun, kategori, ringkasan, dampak, dan sumber sebelum dipublikasikan.']
    if category and not explicit_category:
        warnings.append(f'Kategori "{category}" ditebak dari kata kunci; konfirmasi atau isi --category.')
    if year is not None and not (options.get('period') or metadata.get('period')):
        warnings.append(f'Periode "{period}" diturunkan dari tahun {year}; konfirmasi sebelum dipublikasikan.')

    result = {
        'review_status': 'pending',
        'source_markdown': str(markdown_path),
        'missing_required_fields': missing,
        'warnings': warnings,
        'event': event,
    }
    if parsed_source.hostname.endswith('wikipedia.org'):
        result['source_license'] = 'CC BY-SA 4.0'
        result['source_license_url'] = 'https://creativecommons.org/licenses/by-sa/4.0/'
        result['warnings'].append('Ringkasan diekstrak dari artikel; pastikan atribusi dan kewajiban CC BY-SA dipenuhi sebelum publikasi.')
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('markdown', type=Path, help='File .md hasil ekspor web-to-Markdown')
    parser.add_argument('--source-url', help='URL kanonis sumber jika tidak ada di Markdown')
    parser.add_argument('--source-title', help='Judul halaman sumber')
    parser.add_argument('--source-name', help='Nama sumber, misalnya Wikipedia atau ANRI')
    parser.add_argument('--year', type=int, help='Tahun astronomis; gunakan angka negatif untuk SM')
    parser.add_argument('--period', choices=sorted(PERIODS))
    parser.add_argument('--category', choices=sorted(CATEGORIES))
    parser.add_argument('--region', choices=sorted(REGIONS))
    parser.add_argument('--impact', help='Dampak peristiwa setelah ditinjau')
    parser.add_argument('--tag', dest='tags', action='append', help='Tag; dapat diulang')
    parser.add_argument('--evidence', choices=sorted(EVIDENCE))
    parser.add_argument('--timeline', action='store_true', help='Impor baris-baris kronologi menjadi satu kumpulan draf pending')
    parser.add_argument('--output', '-o', type=Path, help='Simpan draf JSON; default mencetak ke stdout')
    args = parser.parse_args()

    options = {key: getattr(args, key) for key in (
        'source_url', 'source_title', 'source_name', 'year', 'period',
        'category', 'region', 'impact', 'tags', 'evidence',
    )}
    try:
        markdown = args.markdown.read_text(encoding='utf-8')
        draft = make_timeline_drafts(markdown, args.markdown, options) if args.timeline else make_draft(markdown, args.markdown, options)
    except (OSError, ValueError) as exc:
        parser.error(str(exc))
    rendered = json.dumps(draft, ensure_ascii=False, indent=2) + '\n'
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(rendered, encoding='utf-8')
        print(json.dumps({
            'status': 'draft_generated',
            'output': str(args.output),
            'event_count': draft.get('event_count', 1),
            'missing_required_fields': draft.get('missing_required_fields'),
        }, ensure_ascii=False))
    else:
        print(rendered, end='')
    return 0


if __name__ == '__main__':
    sys.exit(main())
