import { NextRequest, NextResponse } from 'next/server';
import { analyzeColorPalette } from '@/lib/assistant/functions';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await analyzeColorPalette(body);
  return NextResponse.json(result);
}
