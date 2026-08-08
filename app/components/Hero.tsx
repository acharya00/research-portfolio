"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[58%_42%] lg:gap-8 lg:py-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            DILLI RAM ACHARYA
          </p>

          <p className="mb-5 text-sm text-gray-400">
            M.Eng. Candidate @ Nanjing Agricultural University, China
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            DILLI RAM
            <br />
            <span className="text-cyan-400">ACHARYA</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-gray-300 sm:text-xl">
            Agricultural &amp; Biosystems Engineer
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Developing biomass-derived functional materials for
            electrochemical sensing, environmental monitoring, and
            sustainable resource recovery. My research integrates biomass
            valorization, biochar engineering, material characterization,
            Density Functional Theory (DFT), and machine learning.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Get in Touch
            </a>

            <a
              href="#publications"
              className="rounded-xl border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
            >
              View Publications
            </a>
          </div>

          {/* Academic links */}
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="https://www.linkedin.com/in/dilli-ram-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="https://www.researchgate.net/profile/Dilli-Acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ResearchGate
            </a>

            <a
              href="https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Google Scholar
            </a>

            <a
              href="mailto:dilliacharya63@gmail.com"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">

            {/* Card glow */}
            <div className="absolute -inset-5 rounded-3xl bg-cyan-500/10 blur-3xl" />

            {/* Profile card */}
            <div className="relative rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

              {/* Profile image */}
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full border-4 border-cyan-400 shadow-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Dilli Ram Acharya"
                    width={135}
                    height={135}
                    priority
                    className="h-[135px] w-[135px] object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">
                  Dilli Ram Acharya
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-400">
                  M.Eng. Scholar &amp; Agricultural Engineer
                </p>
              </div>

              <div className="my-5 h-px bg-slate-700" />

              {/* Details */}
              <div className="space-y-4">

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-cyan-400">
                    📍
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm text-gray-200">
                      Nanjing, Jiangsu, China
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-cyan-400">
                    ✉
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      Email Address
                    </p>

                    <a
                      href="mailto:dilliacharya63@gmail.com"
                      className="mt-0.5 block break-all text-sm text-gray-200 hover:text-cyan-400"
                    >
                      dilliacharya63@gmail.com
                    </a>
                  </div>
                </div>

                {/* Research */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-cyan-400">
                    ⚗
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      Master's Research Focus
                    </p>

                    <p className="mt-0.5 text-sm leading-5 text-gray-200">
                      Biomass-derived biochar and electrochemical sensing
                      for environmental pollutant detection.
                    </p>
                  </div>
                </div>

                {/* Professional license */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-cyan-400">
                    ▣
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      Professional License
                    </p>

                    <p className="mt-0.5 text-sm leading-5 text-gray-200">
                      NEC 481 — Agricultural Engineering
                    </p>

                    <p className="text-xs text-gray-400">
                      Nepal Engineering Council, Nepal
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-cyan-400">
                    ◎
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      Languages
                    </p>

                    <p className="mt-0.5 text-sm text-gray-200">
                      Nepali · English · Hindi · Chinese
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-1 text-[10px] text-gray-500">
          <span>Scroll</span>
          <span className="animate-bounce text-base text-cyan-400">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}