import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Tag from './ui/Tag';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
});

export default async function Blog() {
  const posts = await getAllPosts();
  const latest = posts[0];

  return (
    <section
      id="blog"
      className="scroll-mt-24 bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            BLOG &amp; LAB NOTES
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Research, Laboratory &amp; Learning
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            A space where I document laboratory experiences, research ideas,
            experimental notes, scientific concepts, and lessons learned
            throughout my academic journey.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {latest ? (
            <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-8">
              <div className="flex items-center justify-between">
                <Tag tone="brand">{latest.category}</Tag>
                <span className="text-xs text-gray-400">
                  {latest.readingTime ?? '5 min read'}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-8 text-gray-900">
                {latest.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-gray-600">
                {latest.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-sm text-gray-500">
                  {dateFormatter.format(Date.parse(latest.date))}
                </span>

                <Link
                  href={`/blog/${latest.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 transition group-hover:translate-x-1"
                >
                  Read
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 p-7 text-center text-sm text-gray-500">
              Latest notes will appear here once available.
            </div>
          )}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            More laboratory notes, research articles, and academic experiences
            will be added as my research journey continues.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition hover:gap-2.5"
          >
            View all posts
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
