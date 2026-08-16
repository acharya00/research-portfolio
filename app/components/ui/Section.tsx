import { ReactNode } from 'react';

const bgMap = {
  white: 'bg-white',
  muted: 'bg-gray-50',
  brand: 'bg-emerald-50/40',
} as const;

export default function Section({
  id,
  bg = 'white',
  children,
  className = '',
}: {
  id?: string;
  bg?: keyof typeof bgMap;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 sm:py-28 ${bgMap[bg]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
