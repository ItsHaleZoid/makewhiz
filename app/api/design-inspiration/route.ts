import { NextRequest, NextResponse } from 'next/server';
import { getDesignInspiration } from '@/lib/assistant/functions';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await getDesignInspiration(body);
  return NextResponse.json(result);
}
