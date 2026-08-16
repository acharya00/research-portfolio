import type { MetadataRoute } from 'next';
import { getAllPosts, getAllPostSlugs } from '@/lib/blog';

const SITE_URL = 'https://dilliramacharya.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = ['', '/blog'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const slugs = await getAllPostSlugs();
  const posts = await getAllPosts();
  const postRoutes = slugs.map((slug) => {
    const post = posts.find((p) => p.slug === slug);
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: post ? new Date(post.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...postRoutes];
}
