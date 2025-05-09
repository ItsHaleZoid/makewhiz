// lib/assistant/functions.ts

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
export async function analyzeColorPalette({
  imageUrl,
}: {
  imageUrl: string;
}) {
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
  const prompt = `Analyze this UI layout and suggest improvements in spacing, accessibility, and responsiveness:\n\n${code}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a world-class UI/UX accessibility and layout optimization expert.',
        },
        { role: 'user', content: prompt },
      ],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No feedback returned.';
}

// 4. Suggest fonts based on mood using GPT
export async function getFontsForMood({ mood }: { mood: string }) {
  const prompt = `Suggest 2 font pairings for a web design with this mood: "${mood}". Return them in this JSON format:\n\n[\n  { "heading": "Font Name", "body": "Font Name" },\n  { "heading": "Font Name", "body": "Font Name" }\n]`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a typography and branding expert for UI/UX designers.',
        },
        { role: 'user', content: prompt },
      ],
    }),
  });

  const data = await res.json();

  try {
    return JSON.parse(data.choices?.[0]?.message?.content || '[]');
  } catch (err) {
    return [];
  }
}
