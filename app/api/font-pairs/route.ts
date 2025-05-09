// app/api/font-pairs/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getFontsForMood } from '@/lib/assistant/functions';

// Optional: preload some fonts from next/font/google
import { Inter, Playfair_Display, Poppins, Lora, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = await getFontsForMood(body);

  return NextResponse.json({
    fonts: result,
    loaded: {
      inter: inter.className,
      playfair: playfair.className,
      poppins: poppins.className,
      lora: lora.className,
      roboto: roboto.className,
    },
  });
}
