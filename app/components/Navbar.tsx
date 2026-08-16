'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X, FileDown, Sprout } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Research', id: 'research' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Publications', id: 'publications' },
  { name: 'Skills', id: 'skills' },
  { name: 'Activities', id: 'activities' },
  { name: 'Blog', id: 'blog' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section || !headerRef.current) return;

    const navbarHeight = headerRef.current.getBoundingClientRect().height;
    const position =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: position, behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* BRAND */}
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, 'home')}
          className="shrink-0"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Sprout size={16} />
            </div>
            <div className="text-lg font-bold tracking-tight text-gray-900">
              Dilli Ram Acharya
            </div>
          </div>
          <div className="mt-0.5 pl-10 text-xs font-medium tracking-wide text-gray-500">
            M.Eng. Researcher
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavigation(e, item.id)}
                className={`relative rounded-lg px-2.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-emerald-500" />
                )}
              </a>
            );
          })}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <FileDown size={15} />
            CV
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg border border-gray-200 p-2 text-gray-700 xl:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-700'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 border-t border-gray-100 pt-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                <FileDown size={15} />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
