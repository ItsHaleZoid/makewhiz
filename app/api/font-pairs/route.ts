import { NextRequest, NextResponse } from 'next/server';
import { getFontsForMood } from '@/lib/assistant/functions';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await getFontsForMood(body);
  return NextResponse.json(result);
}
