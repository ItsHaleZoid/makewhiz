export async function getDesignInspiration({
  platform,
  username,
}: {
  platform: 'dribbble' | 'behance';
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

  // Dribbble fallback using RSS
  const rss = await fetch(`https://dribbble.com/${username}/shots.rss`);
  const xml = await rss.text();
  const matches = [...xml.matchAll(/<media:content url="(.*?)"/g)];
  return matches.map((m) => ({ image: m[1] }));
}