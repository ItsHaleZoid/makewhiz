// lib/assistant/functions.ts

import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 1. Get UI images from Dribbble or Behance
export async function getDesignInspiration({
  platform,
  username,
}: {
  platform: 'behance' | 'dribbble';
  username: string;
}) {
  if (platform === 'behance') {
    const res = await fetch(
      `https://api.behance.net/v2/users/${username}/projects?api_key=${process.env.BEHANCE_API_KEY}`
    );
    const data = await res.json();
    return data.projects.map((p: any) => ({
      title: p.name,
      image: p.covers?.original || p.covers?.['404'],
      url: p.url,
    }));
  }

  // fallback to Dribbble RSS (read-only public)
  const rss = await fetch(`https://dribbble.com/${username}/shots.rss`);
  const xml = await rss.text();
  const matches = [...xml.matchAll(/<media:content url="(.*?)"/g)];
  return matches.map((m) => ({ image: m[1] }));
}

// 2. Analyze dominant colors from an image
export async function analyzeColorPalette({ imageUrl }: { imageUrl: string }) {
  const res = await fetch(
    `https://api.color.pizza/v1/?url=${encodeURIComponent(imageUrl)}`
  );
  const data = await res.json();

  return (
    data.colors?.map((c: any) => ({
      name: c.name,
      hex: c.hex,
      contrast: c.contrast,
    })) || []
  );
}

// 3. Analyze layout and return improvements via GPT
export async function optimizeLayout({ code }: { code: string }) {
  const systemPrompt = `
You are a world-class frontend developer and UI designer.

Your job is to take layout code (HTML, JSX, or TailwindCSS) and return an optimized version that improves:
- Spacing, padding, margin
- Font sizing and text hierarchy
- Responsive layout using modern CSS (flex, grid)
- Visual structure: contrast, color usage, alignment
- Aesthetic appeal: gradients, shadows, border radius
- Mobile-first structure and accessibility

Do not invent new sections. Keep the structure identical.
Return ONLY the improved code. No markdown. No explanation. No wrapping.
`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: code },
    ],
    temperature: 0.5,
  });

  const optimized = res.choices?.[0]?.message?.content?.trim() || '';

  return { optimizedCode: optimized };
}

// 4. Suggest fonts based on mood using GPT
export async function getFontsForMood({ mood }: { mood: string }) {
  const prompt = `Suggest 2 font pairings for a web design with this mood: "${mood}". Return them in this JSON format:\n\n[
  { "heading": "Font Name", "body": "Font Name" },
  { "heading": "Font Name", "body": "Font Name" }
]`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a typography and branding expert for UI/UX designers.',
      },
      { role: 'user', content: prompt },
    ],
    temperature: 0.5,
  });

  try {
    return JSON.parse(res.choices?.[0]?.message?.content || '[]');
  } catch (err) {
    return [];
  }
}

export async function POST(req: Request) {
  return NextResponse.json({ ok: true });
}
