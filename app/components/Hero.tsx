'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-[60%_40%]">

        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Top Identity */}
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            DILLI RAM ACHARYA
          </p>

          <p className="mb-8 text-sm font-medium text-gray-400">
            M.Eng. Candidate @ Nanjing Agricultural University, China
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

            DILLI RAM

            <br />

            <span className="text-cyan-400">
              ACHARYA
            </span>

          </h1>

          {/* Professional Title */}
          <div className="mt-7 text-xl font-semibold text-gray-300 sm:text-2xl">

            <TypeAnimation
              sequence={[
                'Agricultural & Biosystems Engineer',
                2200,
                'Electrochemical Sensor Researcher',
                2200,
                'Biochar Researcher',
                2200,
                'Biomass Valorization Researcher',
                2200,
                'Future Research Scientist',
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />

          </div>

          {/* Research Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Developing biomass-derived functional materials for
            electrochemical sensing, environmental monitoring, and
            sustainable resource recovery. My research integrates
            biomass valorization, biochar engineering, material
            characterization, Density Functional Theory (DFT), and
            machine learning.
          </p>

          {/* Research Keywords */}
          <div className="mt-6 flex max-w-2xl flex-wrap gap-2">

            {[
              'Biomass Conversion',
              'Biochar',
              'Material Characterization',
              'Chemical Sensors',
              'Electrochemical Sensing',
              'Environmental Monitoring',
              'Machine Learning',
              'DFT',
              'Biomass Valorization',
              'Supercapacitors',
              'Sustainable Materials',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Get in Touch
            </a>

            <a
              href="#publications"
              className="rounded-xl border border-cyan-500 px-7 py-3.5 font-semibold text-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
            >
              View Publications
            </a>

          </div>

          {/* Social / Academic Links */}
          <div className="mt-9 flex flex-wrap items-center gap-3">

            <a
              href="https://www.linkedin.com/in/dilli-ram-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/acharya00"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://orcid.org/0009-0007-1035-5461"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ORCID
            </a>

            <a
              href="mailto:dilliacharya63@gmail.com"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* RIGHT SIDE — PROFILE CARD */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >

          <div className="relative w-full max-w-sm">

            {/* Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-cyan-500/10 blur-3xl" />

            {/* ONE PROFILE RECTANGLE */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 p-7 shadow-2xl">

              {/* Profile Image */}
              <div className="flex justify-center">

                <div className="overflow-hidden rounded-full border-4 border-cyan-400 shadow-xl">

                  <Image
                    src="/images/profile.jpg"
                    alt="Dilli Ram Acharya"
                    width={150}
                    height={150}
                    priority
                    className="h-[150px] w-[150px] object-cover"
                  />

                </div>

              </div>

              {/* Name */}
              <div className="mt-5 text-center">

                <h2 className="text-2xl font-bold">
                  Dilli Ram Acharya
                </h2>

                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-cyan-400">
                  M.Eng. Scholar & Agricultural Engineer
                </p>

              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-700" />

              {/* Details */}
              <div className="space-y-5">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    Nanjing, Jiangsu, China
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email Address
                  </p>

                  <a
                    href="mailto:dilliacharya63@gmail.com"
                    className="mt-1 block break-all text-sm text-gray-200 hover:text-cyan-400"
                  >
                    dilliacharya63@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Master's Research Focus
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Biomass-derived biochar and electrochemical sensing
                    for environmental pollutant detection.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Professional License
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    Nepal Engineering Council — Agricultural Engineering
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Languages
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    Nepali · English · Hindi · Chinese
                  </p>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
          <span>Scroll</span>
          <span className="animate-bounce text-lg text-cyan-400">
            ↓
          </span>
        </div>
      </div>

    </section>
  )
}