"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  FileText,
} from "lucide-react";

const education = [
  {
    year: "September 2024 – July 2027",
    degree: "Master of Engineering",
    field: "Agricultural Mechanization Engineering",
    university: "Nanjing Agricultural University",
    location: "Nanjing, China",
    percentage: "87.9%",
    coursework: [
      "New Energy Utilization and Development",
      "Agricultural Ecology and Environmental Engineering",
      "Agricultural Environment Control Engineering",
      "Special Research Topics on Agricultural Engineering",
      "Higher Agricultural Mechanics",
      "Seminar Discussion",
      "Writing Scientific Papers and Making Presentations in English",
    ],
    thesis:
      "Development of Seaweed-Derived Biochar-Modified Sensor for Electrochemical Detection of Heavy Metals and Nitrogen Pollutants",
    status: "Proposed",
  },
  {
    year: "November 2017 – July 2022",
    degree: "Bachelor of Engineering",
    field: "Agricultural Engineering",
    university:
      "Institute of Engineering, Purwanchal Campus, Tribhuvan University",
    location: "Dharan, Nepal",
    percentage: "74.5%",
    coursework: [
      "Hydrology and Agricultural Meteorology",
      "Soil and Water Conservation Engineering",
      "Irrigation and Drainage Engineering",
      "Climate Change and Adaptation Measures",
      "Remote Sensing and GIS",
      "Probability and Statistics",
      "Agricultural Mechanization",
    ],
    thesis:
      "Economic Analysis of Custom Hiring Center: A Case Study on Dipjyoti Krishi Yantrikaran Custom Hiring Center at Belaka-5, Udayapur District of Nepal",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white py-24 sm:py-28"
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
            Academic Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Education
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            My academic background combines agricultural engineering,
            mechanization, environmental systems, and sustainable
            technologies, providing the foundation for my current
            research in biomass-derived materials and electrochemical
            sensing.
          </p>
        </motion.div>

        {/* =====================================================
            EDUCATION TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-200 md:block" />

          <div className="space-y-12">

            {education.map((item, index) => (
              <motion.article
                key={item.degree}
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
                  delay: index * 0.1,
                }}
                className="relative md:pl-16"
              >

                {/* =================================================
                    TIMELINE ICON
                ================================================= */}

                <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-600 shadow-sm md:flex">
                  <GraduationCap size={21} />
                </div>

                {/* =================================================
                    MAIN EDUCATION CARD
                ================================================= */}

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg sm:p-9">

                  {/* =================================================
                      DEGREE HEADER
                  ================================================= */}

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      {/* DATE */}

                      <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
                        {item.year}
                      </span>

                      {/* DEGREE */}

                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                        {item.degree}
                      </h3>

                      {/* FIELD */}

                      <p className="mt-1 text-lg font-semibold text-emerald-600">
                        {item.field}
                      </p>

                      {/* UNIVERSITY */}

                      <p className="mt-3 text-base font-medium text-gray-700">
                        {item.university}
                      </p>

                      {/* LOCATION */}

                      <p className="mt-1 text-sm text-gray-500">
                        {item.location}
                      </p>

                    </div>

                    {/* =================================================
                        ACADEMIC PERFORMANCE
                    ================================================= */}

                    <div className="w-fit rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 lg:min-w-[150px] lg:text-right">

                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Percentage
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-900">
                        {item.percentage}
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      RELEVANT COURSEWORK
                  ================================================= */}

                  <div className="mt-9 border-t border-gray-100 pt-7">

                    <div className="flex items-center gap-2">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                        <BookOpen
                          size={17}
                          className="text-gray-600"
                        />
                      </div>

                      <h4 className="font-bold text-gray-800">
                        Relevant Coursework
                      </h4>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm leading-5 text-gray-600 transition-colors hover:border-emerald-300 hover:text-emerald-700"
                        >
                          {course}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* =================================================
                      THESIS
                  ================================================= */}

                  <div className="mt-8 border-t border-gray-100 pt-7">

                    <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6">

                      {/* Thesis heading */}

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white">
                          <FileText
                            size={17}
                            className="text-gray-600"
                          />
                        </div>

                        <div>

                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                            Thesis
                          </h4>

                          {item.status === "Proposed" && (
                            <p className="mt-1 text-xs font-medium text-gray-500">
                              Proposed research
                            </p>
                          )}

                          {item.status === "Completed" && (
                            <p className="mt-1 text-xs font-medium text-gray-500">
                              Completed research
                            </p>
                          )}

                        </div>

                      </div>

                      {/* Thesis title */}

                      <div className="mt-5 border-l-2 border-emerald-500 pl-5">

                        <p className="leading-7 text-gray-700">
                          {item.thesis}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}