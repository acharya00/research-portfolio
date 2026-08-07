'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  ArrowDown,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
            Welcome to My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            DILLI RAM
            <br />
            <span className="text-cyan-400">
              ACHARYA
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-gray-300">

            <TypeAnimation
              sequence={[
                'Agricultural & Biosystems Engineer',
                2000,
                'Electrochemical Sensor Researcher',
                2000,
                'Biochar Engineer',
                2000,
                'Machine Learning Enthusiast',
                2000,
                'Future Research Scientist',
                2000,
              ]}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Developing biomass-derived functional materials for
            electrochemical sensing, environmental monitoring,
            sustainable resource recovery, Density Functional Theory,
            and machine learning.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/cv.pdf"
              download
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Download CV
            </a>

            <a
              href="#publications"
              className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-900"
            >
              View Publications
            </a>

          </div>

          {/* Social Icons */}

          <div className="mt-10 flex gap-5">

            <a href="#">
              <Linkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="#">
              <Github className="hover:text-cyan-400 transition" />
            </a>

            <a href="#">
              <BookOpen className="hover:text-cyan-400 transition" />
            </a>

            <a href="mailto:dilliacharya63@gmail.com">
              <Mail className="hover:text-cyan-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -inset-5 rounded-full bg-cyan-500/20 blur-3xl" />

            <Image
              src="/profile.png"
              alt="Dilli Ram Acharya"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-8 border-cyan-400 object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <ArrowDown className="text-cyan-400" />

      </div>

    </section>
  )
}