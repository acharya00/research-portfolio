import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getAllPostSlugs, getPostMeta } from '@/lib/blog';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Tag from '../../components/ui/Tag';

const SITE_URL = 'https://dilliramacharya.com';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 sm:px-8 lg:px-12">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Tag tone="brand">{post.category}</Tag>
              {post.readingTime ? (
                <span className="text-sm text-gray-500">
                  · {post.readingTime}
                </span>
              ) : null}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-gray-500">
              <time dateTime={post.date}>
                {dateFormatter.format(Date.parse(post.date))}
              </time>
            </p>

            {post.description ? (
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {post.description}
              </p>
            ) : null}
          </header>

          <div className="prose prose-emerald mt-12 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-8 prose-p:text-gray-700 prose-li:leading-7 prose-a:text-emerald-600 hover:prose-a:underline">
            <Content />
          </div>

          {post.tags.length > 0 ? (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-200 pt-8">
              {post.tags.map((tag) => (
                <Tag key={tag} tone="neutral">
                  #{tag}
                </Tag>
              ))}
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
