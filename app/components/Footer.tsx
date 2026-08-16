'use client';

import Link from 'next/link';
import {
  Mail,
  Linkedin,
  GraduationCap,
  Youtube,
  Facebook,
  Images,
  ArrowUpRight,
  FileDown,
  MapPin,
} from 'lucide-react';

const RESEARCHGATE_URL =
  'https://www.researchgate.net/profile/Dilli-Acharya';
const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en';
const LINKEDIN_URL = 'https://www.linkedin.com/in/dilli-ram-acharya';
const EMAIL = 'dilliacharya63@gmail.com';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const professionalLinks = [
  {
    name: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: Linkedin,
  },
  {
    name: 'ResearchGate',
    href: RESEARCHGATE_URL,
    icon: GraduationCap,
  },
  {
    name: 'Google Scholar',
    href: SCHOLAR_URL,
    icon: GraduationCap,
  },
  {
    name: 'Email',
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
];

const mediaLinks = [
  {
    name: 'YouTube · Learn With Dilli',
    href: 'https://www.youtube.com/@learnwithdilli79',
    icon: Youtube,
  },
  {
    name: 'YouTube · Dilli Vlogs',
    href: 'https://www.youtube.com/@dillivlogs_2025',
    icon: Youtube,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/dillivlogs2025',
    icon: Facebook,
  },
  {
    name: 'Gallery',
    href: '#gallery',
    icon: Images,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* CTA strip */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-sm sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Get in Touch
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Open to research collaboration and academic exchange.
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Whether it&apos;s electrochemical sensing, biomass-derived
              materials, or environmental monitoring — I&apos;d be happy to
              connect.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
                DA
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Dilli Ram Acharya
              </h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              Agricultural &amp; Biosystems Engineer researching biomass
              valorization, biochar engineering, electrochemical sensing,
              and sustainable materials.
            </p>

            <div className="mt-6 flex items-start gap-2 text-sm text-gray-600">
              <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-600" />
              <span>Nanjing, Jiangsu, China</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-gray-600 transition hover:text-emerald-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ACADEMIC & PROFESSIONAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Academic &amp; Professional
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {professionalLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-2.5 text-gray-600 transition hover:text-emerald-700"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-emerald-600 transition group-hover:text-emerald-700"
                      />
                      <span>{link.name}</span>
                      {isExternal && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition group-hover:opacity-100"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* MEDIA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Media
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {mediaLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-2.5 text-gray-600 transition hover:text-emerald-700"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-emerald-600 transition group-hover:text-emerald-700"
                      />
                      <span>{link.name}</span>
                      {isExternal && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition group-hover:opacity-100"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dilli Ram Acharya. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for research collaboration
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
