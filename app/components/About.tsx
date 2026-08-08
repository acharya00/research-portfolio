"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  FlaskConical,
  Leaf,
  Droplets,
  CloudSun,
  Tractor,
  Cpu,
  Microscope,
  Recycle,
  Database,
} from "lucide-react";

const researchAreas = [
  {
    icon: Recycle,
    title: "Sustainable Material Preparation",
    description:
      "Development of biomass-derived functional materials, particularly biochar, through sustainable conversion, engineering, and modification strategies.",
  },
  {
    icon: Droplets,
    title: "Environmental Monitoring",
    description:
      "Development of electrochemical sensing platforms for detecting environmental pollutants in water, soil, and agricultural systems.",
  },
  {
    icon: FlaskConical,
    title: "Electrochemical Sensors",
    description:
      "Design and fabrication of affordable electrochemical sensors for chemical and pollutant detection using functional carbon-based materials.",
  },
  {
    icon: Leaf,
    title: "Biomass Valorization",
    description:
      "Converting agricultural and marine biomass residues into valuable materials for environmental, agricultural, and engineering applications.",
  },
  {
    icon: CloudSun,
    title: "Climate Change & Environmental Systems",
    description:
      "Understanding climate-related impacts on agricultural and environmental systems, including water availability, irrigation, and resource management.",
  },
  {
    icon: Tractor,
    title: "Agricultural Machinery & Mechanization",
    description:
      "Agricultural machinery, mechanization systems, engineering design, and technological approaches for improving agricultural operations.",
  },
  {
    icon: Microscope,
    title: "Material Characterization",
    description:
      "Investigation of material structure, morphology, surface chemistry, and electrochemical properties using advanced characterization techniques.",
  },
  {
    icon: Cpu,
    title: "Computational & DFT Analysis",
    description:
      "Application of Density Functional Theory and computational chemistry to understand molecular interactions, adsorption, and sensing mechanisms.",
  },
  {
    icon: Database,
    title: "Machine Learning & Data Analysis",
    description:
      "Application of machine learning and data-driven methods for prediction, interpretation, and optimization of research and engineering systems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-24 text-gray-900 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

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

        {/* ===================================================== */}
        {/* MAIN CONTENT */}
        {/* ===================================================== */}

        <div className="grid gap-16 lg:grid-cols-5">

          {/* ================================================= */}
          {/* LEFT COLUMN */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >

            {/* ================= BIOGRAPHY ================= */}

            <div className="space-y-6">

              <div>
                <h3 className="text-2xl font-bold">
                  Academic Journey
                </h3>

                <div className="mt-3 h-px w-12 bg-blue-600" />
              </div>

              {/* CURRENT DEGREE */}

              <div className="border-l-2 border-blue-200 pl-5">

                <p className="leading-8 text-gray-700">
                  I am <strong>Dilli Ram Acharya</strong>, currently pursuing
                  a <strong>Master of Engineering in Agricultural Mechanization
                  Engineering</strong> at Nanjing Agricultural University,
                  China. My current academic and research work focuses on
                  sustainable materials, electrochemical sensing,
                  environmental monitoring, and agricultural engineering.
                </p>

              </div>

              {/* BACHELOR */}

              <div className="border-l-2 border-gray-200 pl-5">

                <p className="leading-8 text-gray-700">
                  I completed my <strong>Bachelor of Engineering in
                  Agricultural Engineering</strong> from the Institute of
                  Engineering, Purwanchal Campus, Tribhuvan University,
                  Nepal. My undergraduate education provided a foundation
                  in agricultural mechanization, hydrology, irrigation,
                  environmental engineering, climate change, and
                  engineering applications in agriculture.
                </p>

              </div>

              {/* MASTER */}

              <div className="border-l-2 border-gray-200 pl-5">

                <p className="leading-8 text-gray-700">
                  During my master's research at Nanjing Agricultural
                  University, I have been working on biomass-derived
                  functional materials and their application in
                  electrochemical detection of environmental pollutants.
                  My research integrates biochar engineering, material
                  characterization, electrochemical techniques,
                  computational analysis, and data-driven approaches.
                </p>

              </div>

            </div>

            {/* ================= MISSION ================= */}

            <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold">
                  Mission
                </h3>

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

            {/* ================= RESEARCH DEDICATION ================= */}

            <div className="mt-8 rounded-2xl border border-gray-200 p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold">
                  Research Dedication
                </h3>

              </div>

              <p className="mt-5 leading-8 text-gray-600">
                I am committed to developing research that combines
                fundamental understanding with practical applications.
                My approach emphasizes careful experimentation,
                quantitative analysis, reproducibility, and continuous
                learning across materials science, electrochemistry,
                agricultural engineering, and computational methods.
              </p>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT COLUMN */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >

            {/* ================= PRIMARY RESEARCH ================= */}

            <div>

              <div className="mb-8">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Research Interests
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Primary Research Areas
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  My research interests span sustainable materials,
                  environmental sensing, agricultural engineering,
                  computational science, and data-driven approaches.
                </p>

              </div>

              {/* ================= RESEARCH LIST ================= */}

              <div className="space-y-4">

                {researchAreas.map((area, index) => {

                  const Icon = area.icon;

                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      whileHover={{ x: 4 }}
                      className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                    >

                      <div className="flex items-start gap-4">

                        {/* ICON */}

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                          <Icon className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        {/* CONTENT */}

                        <div>

                          <h4 className="text-lg font-bold text-gray-900">
                            {area.title}
                          </h4>

                          <p className="mt-2 leading-7 text-gray-600">
                            {area.description}
                          </p>

                        </div>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}