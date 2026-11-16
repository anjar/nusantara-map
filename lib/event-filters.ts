import type { TimelineEvent } from './events';

export type EventFilter =
  | 'all'
  | 'recorded'
  | 'geology'
  | 'disease'
  | 'kingdom'
  | 'colonial-war'
  | 'independence';

/** One predicate keeps tab counts and the displayed collection consistent. */
export function matchesEventFilter(event: TimelineEvent, filter: EventFilter): boolean {
  switch (filter) {
    case 'recorded':
      return (
        event.year > 0 && event.evidence !== 'contested' && event.evidence !== 'reconstruction'
      );
    case 'geology':
      return (
        ['glaciation', 'deglaciation', 'post-glacial', 'holocene'].includes(event.period) ||
        ['sea-level', 'geology', 'climate', 'disaster'].includes(event.category)
      );
    case 'disease':
      return event.category === 'disease';
    case 'kingdom':
      return (
        event.category === 'kingdom' ||
        (event.period === 'kingdom' && !['war', 'disaster', 'diplomacy'].includes(event.category))
      );
    case 'colonial-war':
      return (
        event.period === 'colonial' ||
        event.category === 'colonial' ||
        event.category === 'war' ||
        event.category === 'violence'
      );
    case 'independence':
      return (
        event.period === 'independence' ||
        event.period === 'republic' ||
        event.category === 'independence' ||
        event.category === 'diplomacy' ||
        event.category === 'politics'
      );
    default:
      return true;
  }
}

export function searchEvents(
  events: TimelineEvent[],
  filter: EventFilter,
  query = '',
): TimelineEvent[] {
  const terms = query.toLocaleLowerCase('id-ID').trim().split(/\s+/).filter(Boolean);
  return events.filter((event) => {
    if (!matchesEventFilter(event, filter)) return false;
    const haystack = [
      event.title,
      event.subtitle,
      event.summary,
      event.region,
      ...event.tags,
      ...(event.sources || []).flatMap((source) => [source.title, source.sourceName]),
    ]
      .join(' ')
      .toLocaleLowerCase('id-ID');
    return terms.every((term) => haystack.includes(term));
  });
}
