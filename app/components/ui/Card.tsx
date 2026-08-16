"use client";

import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, VIEWPORT } from './motion';

type CardProps = Omit<HTMLMotionProps<'article'>, 'children'> & {
  children: ReactNode;
  delay?: number;
  interactive?: boolean;
};

export default function Card({
  children,
  delay = 0,
  interactive = true,
  className = '',
  ...rest
}: CardProps) {
  const interactiveClass = interactive
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl'
    : '';

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.5, delay }}
      whileHover={interactive ? { y: -5 } : undefined}
      className={`overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8 ${interactiveClass} ${className}`}
      {...rest}
    >
      {children}
    </motion.article>
  );
}
