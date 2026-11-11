import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sitesPath = join(process.cwd(), 'public', 'data', 'sites.json');
    const content = await readFile(sitesPath, 'utf-8');
    const sites = JSON.parse(content);
    const site = sites.find((s: any) => s.id === id);

    if (!site) {
      return NextResponse.json({ error: 'Situs tidak ditemukan.' }, { status: 404 });
    }

    return NextResponse.json(site);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load site' }, { status: 500 });
  }
}
