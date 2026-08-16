"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-24 text-gray-900 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About Me
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Biography
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div>
              <h3 className="text-2xl font-bold">Academic Journey</h3>
              <div className="mt-3 h-px w-12 bg-blue-600" />
            </div>

            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-blue-200 pl-5">
                <p className="leading-8 text-gray-700">
                  I am <strong>Dilli Ram Acharya</strong>, currently pursuing
                  a <strong>Master of Engineering in Agricultural
                  Mechanization Engineering</strong> at Nanjing Agricultural
                  University, China. My current academic and research work
                  focuses on sustainable materials, electrochemical sensing,
                  environmental monitoring, and agricultural engineering.
                </p>
              </div>

              <div className="border-l-2 border-gray-200 pl-5">
                <p className="leading-8 text-gray-700">
                  I completed my <strong>Bachelor of Engineering in
                  Agricultural Engineering</strong> from the Institute of
                  Engineering, Purwanchal Campus, Tribhuvan University,
                  Nepal. My undergraduate education provided a foundation in
                  agricultural mechanization, hydrology, irrigation,
                  environmental engineering, climate change, and engineering
                  applications in agriculture.
                </p>
              </div>

              <div className="border-l-2 border-gray-200 pl-5">
                <p className="leading-8 text-gray-700">
                  During my master&apos;s research at Nanjing Agricultural
                  University, I have been working on biomass-derived
                  functional materials and their application in
                  electrochemical detection of environmental pollutants. My
                  research integrates biochar engineering, material
                  characterization, electrochemical techniques,
                  computational analysis, and data-driven approaches.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Mission</h3>
              </div>
              <p className="mt-5 leading-8 text-gray-600">
                My mission is to develop scientifically rigorous and
                practically useful engineering solutions by connecting
                sustainable material development with environmental
                monitoring and agricultural applications. I am particularly
                interested in transforming underutilized biomass resources
                into functional materials that can address real-world
                environmental challenges.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Research Dedication</h3>
              </div>
              <p className="mt-5 leading-8 text-gray-600">
                I am committed to developing research that combines
                fundamental understanding with practical applications. My
                approach emphasizes careful experimentation, quantitative
                analysis, reproducibility, and continuous learning across
                materials science, electrochemistry, agricultural
                engineering, and computational methods.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
