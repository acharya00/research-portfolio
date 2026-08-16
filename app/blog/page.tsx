import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tag from '../components/ui/Tag';

export const metadata: Metadata = {
  title: 'Blog & Lab Notes',
  description:
    'Laboratory notes, research articles, and reflections from my work on biomass valorization, biochar engineering, and electrochemical sensing.',
  alternates: { canonical: '/blog' },
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 sm:px-8 lg:px-12">
        <article className="mx-auto max-w-5xl">
          <Link
            href="/#blog"
            className="text-sm font-semibold text-emerald-600"
          >
            ← Back to Home
          </Link>

          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Blog & Lab Notes
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Research, Laboratory & Learning
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A space where I document laboratory experiences, research
              ideas, experimental notes, scientific concepts, and lessons
              learned throughout my academic journey.
            </p>
          </header>

          <ul className="mt-14 grid gap-8 md:grid-cols-2">
            {posts.length === 0 ? (
              <li className="rounded-3xl border border-gray-200 bg-white p-8 text-gray-600">
                No posts yet. Check back soon.
              </li>
            ) : (
              posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <Tag tone="brand">{post.category}</Tag>
                      {post.readingTime ? (
                        <span className="text-xs text-gray-400">
                          {post.readingTime}
                        </span>
                      ) : null}
                    </div>

                    <h2 className="mt-6 text-2xl font-bold leading-8 text-gray-900 transition group-hover:text-emerald-700">
                      {post.title}
                    </h2>

                    <p className="mt-4 flex-1 leading-7 text-gray-600">
                      {post.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                      <time
                        className="text-sm text-gray-500"
                        dateTime={post.date}
                      >
                        {dateFormatter.format(Date.parse(post.date))}
                      </time>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 transition group-hover:translate-x-1">
                        Read
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
