'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-gray-900"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Academic Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Passionate about transforming biomass waste into functional
            materials for environmental monitoring through electrochemical
            sensing, sustainable material engineering, and intelligent data
            analysis.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-16 lg:grid-cols-3">

          {/* LEFT PROFILE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:sticky lg:top-28">

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Dilli Ram Acharya"
                  width={600}
                  height={700}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold">
                  Dilli Ram Acharya
                </h3>

                <p className="mt-1 font-medium text-emerald-600">
                  Agricultural & Biosystems Engineer
                </p>

                <p className="mt-2 text-gray-500">
                  M.Eng. Candidate
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            {/* Biography */}

            <div className="mb-14">
              <h3 className="mb-5 text-3xl font-bold">
                Biography
              </h3>

              <p className="mb-6 leading-8 text-gray-700">
                I am an Agricultural and Biosystems Engineer currently
                pursuing a Master of Engineering at Nanjing Agricultural
                University, China. My research focuses on developing
                biomass-derived functional materials for electrochemical
                sensing platforms aimed at environmental monitoring and
                sustainable resource recovery.
              </p>

              <p className="leading-8 text-gray-700">
                My work integrates biochar engineering, advanced material
                characterization, electrochemical sensor fabrication,
                Density Functional Theory (DFT), and machine learning to
                design affordable, high-performance sensing materials for
                agriculture and environmental applications.
              </p>
            </div>

            {/* Research Motivation */}

            <div className="mb-14">
              <h3 className="mb-5 text-3xl font-bold">
                Research Motivation
              </h3>

              <p className="leading-8 text-gray-700">
                Every year, enormous quantities of agricultural and marine
                biomass are discarded despite containing valuable carbon
                resources. My goal is to convert these wastes into
                sustainable functional materials capable of replacing
                expensive commercial sensing materials. By combining biomass
                valorization, electrochemical sensing, and computational
                analysis, I aim to develop low-cost technologies that
                contribute to environmental protection and precision
                agriculture.
              </p>
            </div>

            {/* Research Philosophy */}

            <div className="mb-14">
              <h3 className="mb-5 text-3xl font-bold">
                Research Philosophy
              </h3>

              <p className="leading-8 text-gray-700">
                I believe meaningful research should solve real-world
                problems. My vision is to bridge fundamental material
                science with practical environmental applications by
                developing sustainable technologies that are scientifically
                rigorous, economically affordable, and socially impactful.
              </p>
            </div>

            {/* Quick Facts */}

            <div>
              <h3 className="mb-8 text-3xl font-bold">
                Quick Facts
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Nationality
                  </p>
                  <p className="mt-2 font-semibold">
                    Nepal 🇳🇵
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Current University
                  </p>
                  <p className="mt-2 font-semibold">
                    Nanjing Agricultural University
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Current Degree
                  </p>
                  <p className="mt-2 font-semibold">
                    Master of Engineering
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Career Goal
                  </p>
                  <p className="mt-2 font-semibold">
                    Research Scientist
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Languages
                  </p>
                  <p className="mt-2 font-semibold">
                    Nepali, English, Hindi, Chinese
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-gray-500">
                    Research Areas
                  </p>
                  <p className="mt-2 font-semibold">
                    Biochar, Sensors, DFT, ML
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}