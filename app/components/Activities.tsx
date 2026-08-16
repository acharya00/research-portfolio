"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Trophy,
  Award,
  Medal,
  Users,
  CalendarDays,
  Mountain,
  Plane,
  Volleyball,
  Globe2,
  Footprints,
} from "lucide-react";

const volunteering = [
  {
    period: "2019 – 2020",
    organization: "Nepal Agricultural Engineering Students Society (NAESS)",
    location: "Dharan, Nepal",
    role: "Vice Secretary",
    icon: Users,
    description:
      "Supported organizational management and administrative activities while coordinating student-based academic and professional development programs.",
    highlights: [
      "Administrative coordination",
      "Student engagement activities",
      "Event organization support",
    ],
  },
  {
    period: "2020 – 2021",
    organization: "DELTA 2.0",
    location: "Dharan, Nepal",
    role: "Financial Coordinator",
    icon: Handshake,
    description:
      "Managed organizational financial activities including budgeting, expense tracking, and financial reporting during academic and institutional events.",
    highlights: ["Budget planning", "Expense management", "Financial documentation"],
  },
];

const activities = [
  {
    period: "May 2025",
    title: "Perceiving China 2025 Program (Yangzhou Visit)",
    organization: "College of International Education, Nanjing Agricultural University",
    icon: Plane,
  },
  {
    period: "Sep 2025",
    title: "Qixia Mountain Cultural and Natural Exploration",
    organization: "School of Life Sciences & School of International Education",
    icon: Mountain,
  },
  {
    period: "Oct 2025",
    title: "University Sports Event (Marching, Group Running, Shot Put)",
    organization: "College of International Education, Nanjing Agricultural University",
    icon: Volleyball,
  },
  {
    period: "Nov 2025",
    title: "International Cultural Program (Representing Nepal)",
    organization: "College of International Education, Nanjing Agricultural University",
    icon: Globe2,
  },
  {
    period: "Apr 2026",
    title: "Graduate Hiking Competition (Purple Mountain)",
    organization: "Nanjing Agricultural University",
    icon: Footprints,
  },
  {
    period: "May 2026",
    title: "Belt and Road Youth Sports Exchange Week (Jiangsu)",
    organization: "Jiangsu Provincial Sports and Educational Organizations",
    icon: Medal,
  },
];

const grants = [
  {
    title: "China Scholarship Council (CSC)",
    subtitle: "Fully Funded Master's Scholarship",
    organization: "Nanjing, China · Sep 2024 – July 2027",
    icon: Award,
  },
  {
    title: "Winner, University-Level Essay Writing Competition",
    subtitle: "Perceiving China 2025 Program",
    organization: "College of International Education, Nanjing AU · May 2025",
    icon: Trophy,
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
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
            Leadership & Activities
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Beyond the Laboratory
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Volunteering, student leadership, cultural exchange, sports, and
            awards that complement my academic and research journey.
          </p>
        </motion.div>

        {/* ===================== VOLUNTEERING ===================== */}

        <div className="grid gap-7 md:grid-cols-2">
          {volunteering.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon size={22} />
                    </div>

                    <div>
                      <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                        {item.period}
                      </span>

                      <h3 className="mt-3 text-xl font-bold text-gray-900">
                        {item.role}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-5 font-semibold text-emerald-600">
                  {item.organization}
                </p>

                <p className="mt-2 text-sm text-gray-500">{item.location}</p>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 transition hover:border-emerald-300 hover:text-emerald-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================== ACTIVITIES TIMELINE ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <CalendarDays className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Activities & Engagements
            </h3>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gray-200 md:block" />

            <div className="space-y-6">
              {activities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative md:pl-16"
                  >
                    <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-600 shadow-sm md:flex">
                      <Icon size={18} />
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-bold leading-7 text-gray-900">
                          {item.title}
                        </h4>

                        <span className="w-fit shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-medium text-gray-500">
                        {item.organization}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ===================== GRANTS & AWARDS ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <Trophy className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Grants & Awards
            </h3>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {grants.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-100">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold leading-6 text-gray-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-gray-600">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-gray-500">
                    {item.organization}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
