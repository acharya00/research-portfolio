'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FileDown,
  MapPin,
  Mail,
  FlaskConical,
  BadgeCheck,
  Languages,
  ArrowRight,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { fadeInLeft, fadeInRight, fadeInUp, VIEWPORT } from './ui/motion';

const DEGREES = [
  {
    degree: "Master's",
    field: 'Agricultural Mechanization Engineering',
    university: 'Nanjing Agricultural University',
    location: 'China',
    period: '2024 – Present',
    current: true,
  },
  {
    degree: "Bachelor's",
    field: 'Agricultural Engineering',
    university: 'Tribhuvan University',
    location: 'Nepal',
    period: '2017 – 2022',
    current: false,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-900"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[58%_42%] lg:gap-8 lg:py-28">
        {/* LEFT */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Agricultural & Biosystems Engineer
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Dilli Ram{' '}
            <span className="text-emerald-600">Acharya</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-gray-700 sm:text-xl">
            M.Eng. Candidate · Nanjing Agricultural University, China
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            My research integrates biomass valorization, biochar engineering,
            material characterization, Density Functional Theory (DFT), and
            machine learning to develop affordable sensing platforms for water
            and soil pollutants.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>

            <a
              href="#publications"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              <BookOpen size={16} />
              View Publications
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

          {/* DEGREE CARDS */}
          <motion.dl
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={VIEWPORT}
            className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2"
          >
            {DEGREES.map((d) => (
              <div
                key={d.degree}
                className={`rounded-2xl border p-5 shadow-sm transition ${
                  d.current
                    ? 'border-emerald-200 bg-emerald-50/50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      d.current
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider ${
                      d.current ? 'text-emerald-700' : 'text-gray-500'
                    }`}
                  >
                    {d.period}
                  </span>
                </div>

                <dt className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {d.degree}
                </dt>
                <dd className="mt-1 text-base font-bold leading-snug text-gray-900">
                  {d.field}
                </dd>
                <p className="mt-2 text-xs text-gray-600">
                  {d.university} · {d.location}
                </p>
              </div>
            ))}
          </motion.dl>

          {/* ACADEMIC LINKS */}
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="https://www.linkedin.com/in/dilli-ram-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              LinkedIn
            </a>
            <a
              href="https://www.researchgate.net/profile/Dilli-Acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              ResearchGate
            </a>
            <a
              href="https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Google Scholar
            </a>
            <a
              href="mailto:dilliacharya63@gmail.com"
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT — profile card */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-emerald-200/40 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full border-4 border-emerald-500 shadow-md">
                  <Image
                    src="/images/profile-2026.jpg"
                    alt="Portrait of Dilli Ram Acharya"
                    width={140}
                    height={140}
                    priority
                    className="h-[140px] w-[140px] object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dilli Ram Acharya
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  M.Eng. Scholar · Agricultural Engineer
                </p>
              </div>

              <div className="my-5 h-px bg-gray-200" />

              <ul className="space-y-4 text-sm">
                <Field icon={MapPin} label="Location">
                  Nanjing, Jiangsu, China
                </Field>
                <Field icon={Mail} label="Email Address">
                  <a
                    href="mailto:dilliacharya63@gmail.com"
                    className="block break-all text-gray-800 hover:text-emerald-700"
                  >
                    dilliacharya63@gmail.com
                  </a>
                </Field>
                <Field icon={FlaskConical} label="Research focus">
                  Biomass-derived biochar and electrochemical sensing for
                  environmental pollutant detection.
                </Field>
                <Field icon={BadgeCheck} label="Professional license">
                  NEC 481 — Agricultural Engineering
                  <span className="block text-xs text-gray-500">
                    Nepal Engineering Council, Nepal
                  </span>
                </Field>
                <Field icon={Languages} label="Languages">
                  Nepali · English · Hindi · Chinese
                </Field>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-1 text-[10px] text-gray-500">
          <span>Scroll</span>
          <span className="animate-bounce text-base text-emerald-600">↓</span>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 text-emerald-600" />
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <div className="mt-0.5 text-sm leading-5 text-gray-800">{children}</div>
      </div>
    </li>
  );
}
