"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Users,
  Calculator,
  GraduationCap,
} from "lucide-react";

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
      "Conducting graduate research in the College of Engineering, focusing on biomass-derived functional materials, biochar engineering, electrochemical sensing, environmental pollutant detection, material characterization, and computational analysis.",
    highlights: [
      "Biomass valorization and biochar-based functional materials",
      "Electrochemical sensing of environmental pollutants",
      "Material characterization and sensor development",
      "Density Functional Theory (DFT) and computational analysis",
      "Machine learning applications in research",
    ],
  },

  {
    period: "2019 – 2020",
    organization: "Nepal Agricultural Engineering Students Society (NAESS)",
    location: "Dharan, Nepal",
    role: "Vice Secretary",
    category: "Leadership",
    icon: Users,
    current: false,
    description:
      "Assisted the secretary and team with administrative responsibilities and organizational activities.",
    highlights: [],
  },

  {
    period: "2020 – 2021",
    organization: "DELTA 2.0",
    location: "Dharan, Nepal",
    role: "Financial Coordinator",
    category: "Leadership",
    icon: Calculator,
    current: false,
    description:
      "Managed budgets, expenses, and financial reporting for organizational activities.",
    highlights: [],
  },

  {
    period: "2022 – 2024",
    organization: "Clamphook Academy",
    location: "Thapathali, Kathmandu, Nepal",
    role: "Instructor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Taught mathematical concepts and problem-solving skills to Class 12 students.",
    highlights: [],
  },

  {
    period: "2022 – 2024",
    organization: "Apex Academy",
    location: "Putalisadak, Kathmandu, Nepal",
    role: "Instructor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Provided mathematics tutoring to Class 12 students.",
    highlights: [],
  },

  {
    period: "2022 – 2023",
    organization: "Nepal Kasthamadap College",
    location: "Kalanki, Kathmandu, Nepal",
    role: "Tutor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Provided mathematics tutoring to Class 11 and Class 12 students.",
    highlights: [],
  },

  {
    period: "2022 – 2023",
    organization: "Kasthamadap College of Management",
    location: "Kalanki, Kathmandu, Nepal",
    role: "Tutor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Provided mathematics tutoring to BBA students.",
    highlights: [],
  },

  {
    period: "2022 – 2023",
    organization: "National College of Science (NIST)",
    location: "Lainchour, Kathmandu, Nepal",
    role: "Tutor",
    category: "Teaching",
    icon: GraduationCap,
    current: false,
    description:
      "Provided mathematics tutoring to Class 11 and Class 12 students.",
    highlights: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

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

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            My experience spans graduate research, teaching, financial
            coordination, and academic leadership, with my current work
            focused on sustainable materials and environmental sensing.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-200 md:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.organization}-${experience.role}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="relative md:pl-16"
                >

                  {/* =================================================
                      TIMELINE ICON
                  ================================================= */}

                  <div
                    className={`absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm md:flex ${
                      experience.current
                        ? "border-emerald-300 text-emerald-600"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* =================================================
                      EXPERIENCE CARD
                  ================================================= */}

                  <div
                    className={`rounded-3xl border bg-white p-7 transition-all duration-300 sm:p-8 ${
                      experience.current
                        ? "border-emerald-200 shadow-md hover:-translate-y-1 hover:shadow-xl"
                        : "border-gray-200 shadow-sm hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >

                    {/* Header */}

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      <div>

                        {/* Category */}

                        <div className="flex flex-wrap items-center gap-2">

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
                            <span className="rounded-full border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-600">
                              Current
                            </span>
                          )}

                        </div>

                        {/* Role */}

                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                          {experience.role}
                        </h3>

                        {/* Organization */}

                        <p className="mt-1 text-lg font-semibold text-emerald-600">
                          {experience.organization}
                        </p>

                        {/* Location */}

                        <p className="mt-2 text-sm text-gray-500">
                          {experience.location}
                        </p>

                      </div>

                      {/* Period */}

                      <div className="shrink-0">

                        <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                          {experience.period}
                        </span>

                      </div>

                    </div>

                    {/* Description */}

                    <p className="mt-7 max-w-4xl leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    {/* Research Highlights */}

                    {experience.highlights.length > 0 && (
                      <div className="mt-7 border-t border-gray-100 pt-6">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                          Research Focus
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {experience.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition-colors hover:border-emerald-300 hover:text-emerald-700"
                            >
                              {highlight}
                            </span>
                          ))}

                        </div>

                      </div>
                    )}

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}