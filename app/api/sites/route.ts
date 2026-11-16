import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

let cachedSites: any[] | null = null;

async function getSites() {
  if (!cachedSites) {
    const sitesPath = join(process.cwd(), 'public', 'data', 'sites.json');
    const content = await readFile(sitesPath, 'utf-8');
    cachedSites = JSON.parse(content);
  }
  return cachedSites || [];
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const yearParam = searchParams.get('year');
    const year = yearParam ? parseInt(yearParam, 10) : 1350;

    const sites = await getSites();
    const filtered = sites.filter((s) => s.startYear <= year && s.endYear >= year);

    return NextResponse.json({
      year,
      sites: filtered,
      coverage: 'Jawa',
      curationStatus: 'preliminary',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load sites' }, { status: 500 });
  }
}
