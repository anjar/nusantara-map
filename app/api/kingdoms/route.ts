import { NextRequest, NextResponse } from 'next/server';
import { getKingdomData } from '../../../lib/kingdom-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const yearParam = searchParams.get('year');
    const year = yearParam ? parseInt(yearParam, 10) : 1350;

    if (isNaN(year)) {
      return NextResponse.json({ error: 'Tahun harus bilangan bulat.' }, { status: 400 });
    }

    const { territories, kingdomsMap } = await getKingdomData();
    const matchingFeatures = (territories.features as any[])
      .filter((f) => {
        const p = f.properties;
        return p.startYear <= year && p.endYear >= year;
      })
      .map((f) => {
        const p = f.properties;
        const meta = kingdomsMap.get(p.id) || {};
        return {
          type: 'Feature',
          id: f.id || `${p.id}-${p.startYear}`,
          geometry: f.geometry,
          properties: {
            id: p.id,
            name: p.name,
            color: p.color,
            description: meta.description || p.description || '',
            wikipediaTitle: meta.wikipedia_title || p.wikipediaTitle || p.name,
            wikidataId: meta.wikidata_id || p.wikidataId || '',
            startYear: p.startYear,
            endYear: p.endYear,
            sourceUrl: p.sourceUrl,
            sourceRevision: p.sourceRevision || '',
            license: p.license || 'CC BY 4.0',
            attribution: p.attribution || 'Cliopatria / Seshat Global History Databank',
            notes: p.notes || '',
            relationship: p.relationship || 'unspecified',
          },
        };
      });

    return NextResponse.json(
      {
        year,
        type: 'FeatureCollection',
        features: matchingFeatures,
        coverage: 'Kerajaan Nusantara — sesuai snapshot sumber',
        curationStatus: 'Rekonstruksi wilayah bersumber',
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to query kingdom territories' }, { status: 500 });
  }
}
