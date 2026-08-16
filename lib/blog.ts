import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime?: string;
};

const CONTENT_DIR = join(process.cwd(), 'content', 'blog');

function toSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

function isIsoDate(value: unknown): value is string {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((v): v is string => typeof v === 'string');
  }
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

export async function getAllPostSlugs(): Promise<string[]> {
  const entries = await readdir(CONTENT_DIR);
  return entries
    .filter((name) => /\.mdx?$/.test(name))
    .map(toSlug);
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostMeta(slug)));
  return posts
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => (Date.parse(b.date) - Date.parse(a.date)));
}

export async function getPostMeta(slug: string): Promise<BlogPostMeta | null> {
  const path = join(CONTENT_DIR, `${slug}.mdx`);
  let raw: string;
  try {
    raw = await readFile(path, 'utf8');
  } catch {
    return null;
  }
  const { data } = matter(raw);
  if (
    typeof data.title !== 'string' ||
    typeof data.description !== 'string' ||
    !isIsoDate(data.date)
  ) {
    return null;
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: typeof data.category === 'string' ? data.category : 'Notes',
    tags: normalizeTags(data.tags),
    readingTime:
      typeof data.readingTime === 'string' ? data.readingTime : undefined,
  };
}
