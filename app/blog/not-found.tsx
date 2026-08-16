import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogNotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-20 sm:px-8 lg:px-12">
        <article className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Post not found
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The blog post you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Blog
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
