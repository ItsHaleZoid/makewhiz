import { NextRequest, NextResponse } from 'next/server';
import { optimizeLayout } from '@/lib/assistant/functions';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await optimizeLayout(body);
  return NextResponse.json({ result });
}
