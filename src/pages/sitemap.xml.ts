import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../data/services';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const today = new Date().toISOString().split('T')[0];

  const staticEntries = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { loc: '/services', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { loc: '/insights', priority: '0.9', changefreq: 'daily', lastmod: today },
    { loc: '/work', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/about', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/careers', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly', lastmod: today },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly', lastmod: today },
    { loc: '/cookies', priority: '0.3', changefreq: 'yearly', lastmod: today },
  ];

  const serviceEntries = services.map((service) => ({
    loc: `/services/${service.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
    lastmod: today,
  }));

  const postEntries = posts.map((post) => ({
    loc: `/insights/${post.id}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: (post.data.updatedDate || post.data.pubDate).toISOString().split('T')[0],
  }));

  const categoryEntries = [
    ...new Set(posts.map((post) => `/insights/category/${post.data.category.toLowerCase().replaceAll(' ', '-')}`)),
  ].map((loc) => ({
    loc,
    priority: '0.6',
    changefreq: 'weekly',
    lastmod: today,
  }));

  const tagEntries = [
    ...new Set(posts.flatMap((post) => post.data.tags.map((tag) => `/insights/tag/${tag.toLowerCase().replaceAll(' ', '-')}`))),
  ].map((loc) => ({
    loc,
    priority: '0.5',
    changefreq: 'weekly',
    lastmod: today,
  }));

  const allEntries = [...staticEntries, ...serviceEntries, ...postEntries, ...categoryEntries, ...tagEntries];

  const urls = allEntries
    .map(
      (entry) =>
        `<url>` +
        `<loc>${escapeXml(`https://greyrocks.in${entry.loc}`)}</loc>` +
        `<lastmod>${entry.lastmod}</lastmod>` +
        `<changefreq>${entry.changefreq}</changefreq>` +
        `<priority>${entry.priority}</priority>` +
        `</url>`
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
