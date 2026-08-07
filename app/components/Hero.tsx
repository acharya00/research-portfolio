"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowDown,
  BookOpen,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10">

        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-5">

          {/* ================================================== */}
          {/* LEFT SIDE */}
          {/* ================================================== */}

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Identity */}
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              M.Eng. Researcher
            </p>

            <p className="mt-2 text-sm text-gray-400">
              M.Eng. Candidate @ Nanjing Agricultural University, China
            </p>

            {/* Name */}
            <h1 className="mt-7 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              DILLI RAM
              <br />
              <span className="text-cyan-400">ACHARYA</span>
            </h1>

            {/* Professional Title */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-200 sm:text-3xl">
              Agricultural &amp; Biosystems Engineer
            </h2>

            {/* Research Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Developing biomass-derived functional materials for
              electrochemical sensing, environmental monitoring, and
              sustainable resource recovery. My research combines biomass
              valorization, biochar engineering, material characterization,
              chemical sensors, Density Functional Theory (DFT), and
              machine learning.
            </p>

            {/* Research Interests */}
            <div className="mt-7">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Research Interests
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "Biomass Valorization",
                  "Biochar",
                  "Chemical Sensors",
                  "Electrochemical Sensing",
                  "Environmental Monitoring",
                  "DFT",
                  "Machine Learning",
                  "Sustainable Materials",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/cv.pdf"
                download
                className="rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Download CV
              </a>

              <a
                href="#publications"
                className="rounded-lg border border-cyan-400 px-7 py-3.5 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                View Publications
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-7 py-3.5 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Get in Touch
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-5">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dilli-ram-acharya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <span className="text-sm font-bold">
                  in
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/acharya00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <span className="text-sm font-bold">
                  GH
                </span>
              </a>

              {/* ORCID */}
              <a
                href="https://orcid.org/0009-0007-1035-5461"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <span className="text-sm font-bold">
                  iD
                </span>
              </a>

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <BookOpen size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:dilliacharya63@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>

            </div>

          </motion.div>


          {/* ================================================== */}
          {/* RIGHT SIDE */}
          {/* ================================================== */}

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative mx-auto max-w-md">

              {/* Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-cyan-500/10 blur-3xl" />

              {/* Single Profile Card */}
              <div className="relative rounded-3xl border border-slate-700 bg-slate-900/90 p-7 shadow-2xl backdrop-blur">

                {/* Profile Image */}
                <div className="flex justify-center">

                  <div className="rounded-full border-4 border-cyan-400/70 p-1">

                    <Image
                      src="/profile.png"
                      alt="Dilli Ram Acharya"
                      width={190}
                      height={190}
                      priority
                      className="h-[190px] w-[190px] rounded-full object-cover"
                    />

                  </div>

                </div>

                {/* Name */}
                <div className="mt-6 text-center">

                  <h3 className="text-2xl font-bold text-white">
                    Dilli Ram Acharya
                  </h3>

                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    M.Eng. Scholar &amp; Agricultural Engineer
                  </p>

                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-700" />

                {/* Details */}
                <div className="space-y-5">

                  {/* Location */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-gray-200">
                      Nanjing, Jiangsu, China
                    </p>
                  </div>

                  {/* Email */}
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

                  {/* Research */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Research Focus
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-200">
                      Biomass-derived functional materials,
                      biochar-based electrochemical sensors,
                      and environmental monitoring.
                    </p>
                  </div>

                  {/* Engineering */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Engineering
                    </p>

                    <p className="mt-1 text-sm text-gray-200">
                      Agricultural &amp; Biosystems Engineering
                    </p>
                  </div>

                  {/* Languages */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Languages
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-200">
                      Nepali • English • Hindi • Chinese
                    </p>
                  </div>

                </div>

                {/* Bottom Label */}
                <div className="mt-7 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center">

                  <p className="text-xs font-medium text-cyan-400">
                    Researcher • Engineer • Science Communicator
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-cyan-400"
      >
        <ArrowDown
          size={22}
          className="animate-bounce"
        />
      </a>

    </section>
  );
}