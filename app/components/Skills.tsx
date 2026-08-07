"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Microscope,
  Cpu,
  BookOpen,
} from "lucide-react";

const skillGroups = [
  {
    icon: FlaskConical,
    title: "Research & Experimental",
    description:
      "Experimental research methods and material development relevant to sustainable environmental sensing.",
    skills: [
      "Electrochemical Sensing",
      "Biochar Engineering",
      "Biomass Valorization",
      "Sensor Fabrication",
      "Environmental Pollutant Detection",
      "Electrochemical Analysis",
    ],
  },

  {
    icon: Microscope,
    title: "Characterization & Analysis",
    description:
      "Material characterization and electrochemical techniques used to understand structure, surface chemistry, and sensing behavior.",
    skills: [
      "SEM / TEM",
      "XPS",
      "XRD",
      "FTIR",
      "BET",
      "Cyclic Voltammetry (CV)",
      "Electrochemical Impedance Spectroscopy (EIS)",
      "DPV / SWV",
    ],
  },

  {
    icon: Cpu,
    title: "Computational & Data Science",
    description:
      "Computational chemistry and data-driven approaches supporting experimental research and mechanistic interpretation.",
    skills: [
      "Density Functional Theory (DFT)",
      "Gaussian 16",
      "GaussView",
      "Multiwfn",
      "VMD",
      "Python",
      "R",
      "Machine Learning",
    ],
  },

  {
    icon: BookOpen,
    title: "Research & Academic",
    description:
      "Academic research skills developed through interdisciplinary research, scientific communication, and collaborative work.",
    skills: [
      "Scientific Writing",
      "Literature Review",
      "Research Data Analysis",
      "Scientific Presentation",
      "Research Methodology",
      "Technical Communication",
      "Academic Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Skills & Research Tools
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            An interdisciplinary skill set combining experimental research,
            functional material development, electrochemical analysis,
            computational chemistry, and data-driven methods.
          </p>
        </motion.div>

        {/* ================= SKILL GROUPS ================= */}

        <div className="grid gap-7 md:grid-cols-2">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-8"
              >

                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-emerald-600">
                  <Icon size={23} />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {group.title}
                </h3>

                {/* Description */}

                <p className="mt-3 leading-7 text-gray-600">
                  {group.description}
                </p>

                {/* Skills */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-emerald-200 hover:text-emerald-700"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ================= RESEARCH APPROACH ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10"
        >

          <div className="grid gap-8 lg:grid-cols-3">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Research Approach
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                From Material to Mechanism
              </h3>
            </div>

            <div className="lg:col-span-2">

              <p className="leading-8 text-gray-600">
                My research approach connects biomass conversion and
                functional material engineering with experimental
                electrochemistry, advanced characterization, computational
                chemistry, and data analysis. This integrated approach helps
                connect material structure and surface chemistry with
                electrochemical sensing performance.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}