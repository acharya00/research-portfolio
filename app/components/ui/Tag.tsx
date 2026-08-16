import { ReactNode } from 'react';

type Tone = 'neutral' | 'brand' | 'amber' | 'blue' | 'purple' | 'rose';

const toneMap: Record<Tone, string> = {
  neutral: 'bg-gray-100 text-gray-700',
  brand: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  rose: 'bg-rose-100 text-rose-700',
};

export default function Tag({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${toneMap[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
