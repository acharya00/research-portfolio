"use client";

import { motion } from "framer-motion";
import { Microscope, FlaskConical, Cpu, Code2 } from "lucide-react";

const skillGroups = [
  {
    icon: Microscope,
    title: "Characterization & Analytical",
    skills: [
      { name: "Electrochemical analysis (CV, EIS, DPV, SWV)", level: 90 },
      { name: "FTIR spectroscopy", level: 88 },
      { name: "XRD analysis", level: 85 },
      { name: "SEM imaging", level: 82 },
      { name: "EDS/EDX elemental analysis", level: 78 },
      { name: "BET surface analysis", level: 80 },
      { name: "Raman spectroscopy", level: 75 },
      { name: "XPS surface analysis", level: 72 },
    ],
  },
  {
    icon: FlaskConical,
    title: "Materials & Laboratory",
    skills: [
      { name: "Biochar preparation (pyrolysis)", level: 90 },
      { name: "Electrode fabrication & modification", level: 88 },
      { name: "Ball milling", level: 85 },
      { name: "Electrolyte & analyte preparation", level: 85 },
      { name: "Experimental design", level: 80 },
    ],
  },
  {
    icon: Cpu,
    title: "Computational & Data-Driven",
    skills: [
      { name: "Density Functional Theory (DFT)", level: 78 },
      { name: "HOMO–LUMO & adsorption analysis", level: 75 },
      { name: "Electrostatic potential & IRI analysis", level: 72 },
      { name: "Data analysis & visualization", level: 82 },
      { name: "Machine learning basics", level: 70 },
      { name: "Scientific writing", level: 85 },
    ],
  },
  {
    icon: Code2,
    title: "Software & Programming",
    skills: [
      { name: "Origin (data analysis & plotting)", level: 85 },
      { name: "Python", level: 70 },
      { name: "MATLAB", level: 70 },
      { name: "Microsoft Office (Word, Excel, PowerPoint)", level: 90 },
      { name: "Reference management (EndNote/Zotero)", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-gray-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Technical Skills & Expertise
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Hands-on laboratory, characterization, and computational skills
            applied throughout my research in biochar engineering and
            electrochemical sensing.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium leading-6 text-gray-700">
                          {skill.name}
                        </span>

                        <span className="shrink-0 text-sm font-bold text-emerald-700">
                          {skill.level}/100
                        </span>
                      </div>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.15 + skillIndex * 0.06,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}