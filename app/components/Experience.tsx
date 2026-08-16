"use client";

import { motion } from "framer-motion";
import { FlaskConical, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "September 2024 – July 2027",
    organization: "Nanjing Agricultural University",
    location: "Nanjing, China",
    role: "Graduate Research Assistant",
    category: "Research",
    icon: FlaskConical,
    current: true,
    description:
      "Conducting graduate research in the College of Engineering focusing on sustainable biomass-derived functional materials, biochar engineering, electrochemical sensing platforms, environmental pollutant detection, and computational analysis.",
    highlights: [
      "Biomass valorization and sustainable material development",
      "Biochar-based electrochemical sensor fabrication",
      "Heavy metal and nitrogen pollutant detection",
      "Material characterization and surface analysis",
      "DFT and machine learning-assisted research",
    ],
  },
  {
    period: "2022 – 2024",
    organization:
      "Clamphook Academy, Apex Academy & Kathmandu Educational Institutions",
    location: "Kathmandu, Nepal",
    role: "Mathematics Instructor & Tutor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Provided mathematics instruction and academic guidance to higher secondary and undergraduate students, focusing on conceptual understanding, analytical thinking, and problem-solving skills.",
    highlights: [
      "Class 11 and 12 mathematics teaching",
      "BBA mathematics tutoring",
      "Academic mentoring and student support",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-gray-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Professional & Research Experience
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            My professional journey combines graduate research and teaching
            experience, reflecting my commitment to research, education, and
            continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gray-200 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.organization}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-16"
                >
                  <div
                    className={`absolute left-0 top-2 hidden h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm md:flex ${
                      experience.current
                        ? "border-emerald-300 text-emerald-600"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <div
                    className={`rounded-2xl border bg-white p-7 transition-all duration-300 ${
                      experience.current
                        ? "border-emerald-200 shadow-md hover:shadow-xl"
                        : "border-gray-200 hover:border-emerald-200 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              experience.current
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {experience.category}
                          </span>

                          {experience.current && (
                            <span className="rounded-full border border-emerald-200 px-3 py-1 text-xs text-emerald-600">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 text-2xl font-bold text-gray-900">
                          {experience.role}
                        </h3>

                        <p className="mt-1 font-semibold text-emerald-600">
                          {experience.organization}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                          {experience.location}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-6 leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition hover:border-emerald-300 hover:text-emerald-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
