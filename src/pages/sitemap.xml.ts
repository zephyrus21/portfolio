import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib/notion';

const SITE = 'https://www.piyushify.com';

export const GET: APIRoute = async () => {
  const staticPages = [
    { loc: '/', priority: '1.0' },
    { loc: '/blog', priority: '0.8' },
    { loc: '/gallery', priority: '0.6' },
  ];

  let posts: { slug: string; date: string }[] = [];
  try {
    posts = (await getPublishedPosts()).map((p) => ({ slug: p.slug, date: p.date }));
  } catch {
    // Notion unreachable — still emit the static sitemap.
  }

  const urls = [
    ...staticPages.map(
      (p) => `  <url>\n    <loc>${SITE}${p.loc}</loc>\n    <priority>${p.priority}</priority>\n  </url>`
    ),
    ...posts.map((p) => {
      const lastmod = p.date ? `\n    <lastmod>${new Date(p.date).toISOString()}</lastmod>` : '';
      return `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>${lastmod}\n    <priority>0.7</priority>\n  </url>`;
    }),
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
