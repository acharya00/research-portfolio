"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from './ui/Card';
import Tag from './ui/Tag';

const featuredPost = {
  slug: 'from-biomass-waste-to-functional-biochar',
  category: 'Research',
  categoryTone: 'brand' as const,
  title: 'From Biomass Waste to Functional Biochar',
  description:
    'Exploring how biomass residues can be converted into carbon-rich functional materials and their potential applications in environmental sensing.',
  type: 'Research Notes',
  read: '7 min read',
};

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            BLOG & LAB NOTES
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Research, Laboratory & Learning
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            A space where I document laboratory experiences, research ideas,
            experimental notes, scientific concepts, and lessons learned
            throughout my academic journey.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Tag tone={featuredPost.categoryTone}>
                {featuredPost.category}
              </Tag>
              <span className="text-xs text-gray-400">
                {featuredPost.read}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold leading-8 text-gray-900 transition group-hover:text-emerald-700">
              {featuredPost.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-gray-600">
              {featuredPost.description}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="text-sm text-gray-500">
                {featuredPost.type}
              </span>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 transition group-hover:translate-x-1"
              >
                Read
                <ArrowRight size={14} />
              </Link>
            </div>
          </Card>
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
