import Link from 'next/link';
import {
  Mail,
  Linkedin,
  GraduationCap,
  Youtube,
  Facebook,
  Images,
  ArrowUpRight,
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
  { name: 'LinkedIn', href: LINKEDIN_URL, icon: Linkedin },
  { name: 'ResearchGate', href: RESEARCHGATE_URL, icon: GraduationCap },
  { name: 'Google Scholar', href: SCHOLAR_URL, icon: GraduationCap },
  { name: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
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
  { name: 'Gallery', href: '#gallery', icon: Images },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        {/* MAIN GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
                DA
              </div>
              <h3 className="text-lg font-bold text-white">
                Dilli Ram Acharya
              </h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Agricultural &amp; Biosystems Engineer researching biomass
              valorization, biochar engineering, electrochemical sensing,
              and sustainable materials.
            </p>

            <div className="mt-6 flex items-start gap-2 text-sm text-gray-400">
              <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <span>Nanjing, Jiangsu, China</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-gray-400 transition hover:text-emerald-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ACADEMIC & PROFESSIONAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
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
                      className="group inline-flex items-center gap-2.5 text-gray-400 transition hover:text-emerald-400"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-emerald-400 transition group-hover:text-emerald-300"
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
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
                      className="group inline-flex items-center gap-2.5 text-gray-400 transition hover:text-emerald-400"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-emerald-400 transition group-hover:text-emerald-300"
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

        {/* BOTTOM BAR — copyright centered */}
        <div className="mt-14 border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Dilli Ram Acharya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
