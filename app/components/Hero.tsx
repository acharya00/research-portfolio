"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">

        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-5">

          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {/* Small Identity */}
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                M.Eng. Researcher
              </p>

              <p className="mt-2 text-sm text-gray-400">
                M.Eng. Candidate @ Nanjing Agricultural University, China
              </p>
            </div>

            {/* Name */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              DILLI RAM
              <br />
              <span className="text-cyan-400">ACHARYA</span>
            </h1>

            {/* Professional Title */}
            <h2 className="mt-7 text-xl font-semibold text-gray-200 sm:text-2xl md:text-3xl">
              Agricultural &amp; Biosystems Engineer
            </h2>

            {/* Animated Research Identity */}
            <div className="mt-4 min-h-[36px] text-lg font-medium text-cyan-400 sm:text-xl">
              <TypeAnimation
                sequence={[
                  "Developing Biomass-Derived Functional Materials",
                  2500,
                  "Electrochemical Sensor Researcher",
                  2500,
                  "Biochar & Biomass Valorization Researcher",
                  2500,
                  "Environmental Monitoring Researcher",
                  2500,
                  "Future Research Scientist",
                  2500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* Research Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              My research focuses on converting biomass waste into valuable
              functional materials for environmental applications. I work at
              the intersection of biomass valorization, biochar engineering,
              chemical sensors, electrochemical sensing, environmental
              monitoring, material characterization, Density Functional
              Theory (DFT), and machine learning.
            </p>

            {/* Research Keywords */}
            <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
              {[
                "Biomass Valorization",
                "Biochar",
                "Chemical Sensors",
                "Electrochemical Sensing",
                "Environmental Monitoring",
                "DFT",
                "Machine Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/cv.pdf"
                download
                className="rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                Download CV
              </a>

              <a
                href="#publications"
                className="rounded-xl border border-cyan-400 px-7 py-3.5 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                View Publications
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-5">

              <a
                href="https://www.linkedin.com/in/dilli-ram-acharya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/acharya00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <Github size={22} />
              </a>

              <a
                href="https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <BookOpen size={22} />
              </a>

              <a
                href="mailto:dilliacharya63@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>

            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:col-span-2"
          >
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Image Ring */}
              <div className="relative rounded-full border border-cyan-400/30 bg-slate-900 p-3 shadow-2xl">

                <Image
                  src="/profile.png"
                  alt="Dilli Ram Acharya"
                  width={420}
                  height={420}
                  priority
                  className="h-[280px] w-[280px] rounded-full object-cover sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]"
                />

              </div>

              {/* Small Research Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-700 bg-slate-900/95 px-5 py-2.5 text-xs font-medium text-gray-300 shadow-xl backdrop-blur">
                Biomass • Biochar • Sensors
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-gray-500 transition hover:text-cyan-400"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>

    </section>
  );
}