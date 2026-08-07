"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Trophy,
  Globe2,
  BookOpen,
  Users,
} from "lucide-react";

const achievements = [
  {
    year: "2024–2027",
    icon: GraduationCap,
    title: "China Scholarship Council (CSC) Scholar",
    organization: "Nanjing Agricultural University, China",
    description:
      "Selected for a fully funded Master's degree program at Nanjing Agricultural University through the China Scholarship Council scholarship program.",
  },
  
  {
    year: "2025",
    icon: Trophy,
    title: "Essay Writing Competition",
    organization: "Nanjing Agricultural University",
    description:
      "Won an essay writing competition during university activities, contributing to academic and cultural engagement within the international student community.",
  },
  {
    year: "2025",
    icon: Globe2,
    title: "Perceiving China Program",
    organization: "Yangzhou, China",
    description:
      "Participated in the Perceiving China program, gaining cultural and academic exposure while representing Nepal as an international student.",
  },
  {
    year: "2024–Present",
    icon: Users,
    title: "International Student & Academic Activities",
    organization: "Nanjing Agricultural University",
    description:
      "Actively participated in cultural, academic, international, and student activities at Nanjing Agricultural University.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gray-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Academic & Professional Journey
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            A selection of academic achievements, international experiences,
            and activities that have shaped my journey as a researcher and
            agricultural engineer.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mx-auto max-w-5xl">

          {/* Timeline Line */}

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-200 md:block" />

          <div className="space-y-10">

            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative md:pl-16"
                >

                  {/* Timeline Icon */}

                  <div className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-600 shadow-sm md:flex">
                    <Icon size={20} />
                  </div>

                  {/* Achievement Card */}

                  <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-8">

                    {/* Top Information */}

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                          {item.year}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-gray-500">
                          {item.organization}
                        </p>

                      </div>

                      {/* Mobile Icon */}

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-emerald-600 md:hidden">
                        <Icon size={20} />
                      </div>

                    </div>

                    {/* Description */}

                    <p className="mt-5 max-w-3xl leading-7 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ================= CLOSING STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <div className="border-t border-gray-200 pt-10">

            <p className="text-lg leading-8 text-gray-600">
              These experiences have strengthened my commitment to
              interdisciplinary research, international collaboration, and
              the development of sustainable engineering solutions with
              practical environmental value.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}