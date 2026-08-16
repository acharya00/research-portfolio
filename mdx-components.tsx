import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

function isInternalHref(href: string | undefined): boolean {
  return Boolean(href && (href.startsWith('/') || href.startsWith('#')));
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...rest }) => {
      if (isInternalHref(href)) {
        return (
          <Link href={href as string} {...rest}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    },
    ...components,
  };
}
