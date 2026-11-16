import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import EventDrawer from '../components/EventDrawer';

function render(isOpen = true) {
  return renderToStaticMarkup(
    createElement(EventDrawer, {
      currentYear: 1965,
      onSelectYear: () => {},
      isOpen,
      onClose: () => {},
    }),
  );
}

test('drawer defaults to recorded history and displays full source titles and dates', () => {
  const html = render();
  assert.match(html, /aria-label="Cari peristiwa"/);
  assert.match(html, /Gerakan 30 September dan pembunuhan perwira Angkatan Darat/);
  assert.match(html, /Kekerasan massal dan penahanan 1965–1966/);
  assert.match(html, /dateTime="2020-03-02"/i);
  assert.match(html, /2 Maret 2020/);
  assert.match(html, /Media Statement on confirmed COVID-19 cases/i);
  assert.match(html, /target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(html, /Salakanagara dalam tradisi historiografi/);
  assert.doesNotMatch(html, /Puncak Glasial Maksimum/);
});

test('drawer exposes precision notes and returns no content when closed', () => {
  const html = render();
  assert.match(html, /Tanggal perkiraan/);
  assert.match(html, /1334 dan 1336/);
  assert.match(html, /bukan bukti virus baru pertama masuk/);
  assert.equal(render(false), '');
});
