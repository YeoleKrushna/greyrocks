import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../data/services';

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const staticPaths = ['/', '/about', '/services', '/work', '/careers', '/insights', '/contact', '/privacy', '/terms', '/cookies'];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const postPaths = posts.map((post) => `/insights/${post.id}`);
  const categoryPaths = [...new Set(posts.map((post) => `/insights/category/${post.data.category.toLowerCase().replaceAll(' ', '-')}`))];
  const tagPaths = [...new Set(posts.flatMap((post) => post.data.tags.map((tag) => `/insights/tag/${tag.toLowerCase().replaceAll(' ', '-')}`)))];
  const paths = [...staticPaths, ...servicePaths, ...postPaths, ...categoryPaths, ...tagPaths];
  const urls = paths.map((path) => `<url><loc>${escapeXml(`https://greyrocks.in${path}`)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
