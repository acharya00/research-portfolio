"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const mediaPlatforms = [
  {
    name: "YouTube",
    label: "Video & Learning",
    description:
      "Sharing educational content, research experiences, learning resources, travel, and experiences from my academic journey.",
    url: "https://www.youtube.com/@learnwithdilli79",
    accent: "text-red-500",
    border: "hover:border-red-300",
  },
  {
    name: "Facebook",
    label: "Social & Community",
    description:
      "A space for academic activities, cultural experiences, travel, personal moments, and community engagement.",
    url: "https://www.facebook.com/dillivlogs2025",
    accent: "text-blue-500",
    border: "hover:border-blue-300",
  },
  {
    name: "Dilli Vlogs",
    label: "Personal Journey",
    description:
      "Documenting life beyond the laboratory — travel, culture, learning, experiences, and my journey as an international student and researcher.",
    url: "https://www.youtube.com/@dillivlogs_2025",
    accent: "text-cyan-600",
    border: "hover:border-cyan-300",
  },
];

const milestones = [

  {
    id: 1,
    image: "/gallery/milestone_1.jpg",
    category: "Achievements",
    title: "Perceiving China — Essay Writing Competition",
    description:
      "A memorable academic and cultural milestone from my participation in the Perceiving China program, where I was honored as the winner of the essay writing competition.",
    keywords: [
      "Achievement",
      "Perceiving China",
      "Essay Competition",
      "Academic Life",
    ],
  },
  {
    id: 2,
    image: "/gallery/milestone_2.jpg",
    category: "Cultural Activities",
    title: "Cultural Visit to Qixia Mountain",
    description:
      "A cultural visit to Qixia Mountain in Nanjing with international and Chinese students, exploring local heritage, culture, and the surrounding landscape.",
    keywords: [
      "Culture",
      "Qixia Mountain",
      "Nanjing",
      "International Students",
    ],
  },
  {
    id: 3,
    image: "/gallery/milestone_3.jpg",
    category: "Travel",
    title: "Exploring Shanghai",
    description:
      "A travel experience in Shanghai, capturing a memorable moment while exploring one of China's major cities.",
    keywords: ["Travel", "Shanghai", "China", "Exploration"],
  },
  {
    id: 4,
    image: "/gallery/milestone_4.jpg",
    category: "Cultural Activities",
    title: "Exploring Taizhou",
    description:
      "A cultural exploration of Taizhou, China, experiencing the local environment, culture, and everyday life beyond the university.",
    keywords: ["Culture", "Taizhou", "China", "Exploration"],
  },
  {
    id: 5,
    image: "/gallery/milestone_5.jpg",
    category: "Sports & Activities",
    title: "Road and Belt Badminton Competition 2026",
    description:
      "Participation in the Road and Belt Badminton Competition 2026 in Taizhou, combining international student activities, sports, and cultural exchange.",
    keywords: [
      "Sports",
      "Badminton",
      "Taizhou",
      "Belt and Road",
      "2026",
    ],
  },
  {
    id: 6,
    image: "/gallery/milestone_6.jpg",
    category: "Academic & Cultural",
    title: "Perceiving China — Yangzhou",
    description:
      "A memorable experience in Yangzhou as part of the Perceiving China program, combining cultural exploration, learning, and international student exchange.",
    keywords: [
      "Perceiving China",
      "Yangzhou",
      "Culture",
      "Academic Life",
    ],
  },
  {
id: 7,
image: "/gallery/biomasssamples.jpg",
category: "Research & Labworks",
title: "Biomass Samples for Research",
description:
"Preparation and collection of biomass samples used as feedstock for thermochemical conversion and the development of biomass-derived functional materials.",
keywords: [
"Biomass",
"Feedstock",
"Biomass Valorization",
"Research",
"Sustainable Materials",
],
},
{
id: 8,
image: "/gallery/pyrolysis.jpg",
category: "Research & Labworks",
title: "Biomass Pyrolysis",
description:
"Thermochemical conversion of biomass under controlled conditions to produce carbon-rich biochar for subsequent material characterization and electrochemical sensing applications.",
keywords: [
"Pyrolysis",
"Biochar",
"Thermal Conversion",
"Biomass",
"Carbon Materials",
],
},
{
id: 9,
image: "/gallery/ballmilling.jpg",
category: "Research & Labworks",
title: "Ball Milling of Biochar",
description:
"Mechanical ball milling of biomass-derived biochar to modify particle size and surface characteristics and to develop functional carbon materials for environmental sensing applications.",
keywords: [
"Ball Milling",
"Biochar",
"Material Engineering",
"Particle Size",
"Nanobiochar",
],
},
{
id: 10,
image: "/gallery/biochar.jpg",
category: "Research & Labworks",
title: "Biomass-Derived Biochar",
description:
"Biomass-derived biochar prepared for physicochemical characterization and electrochemical applications. The material serves as a sustainable carbon-based platform for environmental pollutant detection.",
keywords: [
"Biochar",
"Biomass Conversion",
"Carbon Material",
"Environmental Monitoring",
"Sensing",
],
},
{
id: 11,
image: "/gallery/electrode.jpg",
category: "Research & Labworks",
title: "Electrode Preparation",
description:
"Preparation and modification of electrodes using functional biomass-derived materials for electrochemical sensing experiments and environmental pollutant detection.",
keywords: [
"Electrode",
"Electrochemical Sensor",
"Electrode Modification",
"Biochar",
"Sensing",
],
},
{
id: 12,
image: "/gallery/threeelectrode.jpg",
category: "Research & Labworks",
title: "Three-Electrode Electrochemical System",
description:
"Electrochemical experiments using a three-electrode configuration consisting of a working electrode, reference electrode, and counter electrode for controlled electrochemical measurements.",
keywords: [
"Three-Electrode System",
"Working Electrode",
"Reference Electrode",
"Electrochemistry",
"Sensor Research",
],
},
{
id: 13,
image: "/gallery/workstation.jpg",
category: "Research & Labworks",
title: "Electrochemical Workstation",
description:
"Electrochemical measurements performed using an electrochemical workstation to investigate electrode behavior, charge-transfer characteristics, and sensing performance.",
keywords: [
"Electrochemical Workstation",
"CV",
"EIS",
"DPV",
"Electrochemical Analysis",
],
},
];

const filters = [
  "All Milestones",
  "Research & Labworks",
  "Travel",
  "Cultural Activities",
  "Achievements",
  "Sports & Activities",
  "Academic & Cultural",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Milestones");

  const filteredMilestones =
    activeFilter === "All Milestones"
      ? milestones
      : milestones.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-white py-24"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          GALLERY & MEDIA JOURNEY
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Beyond Research
        </h2>

        <p className="mt-6 leading-8 text-gray-600">
          Research is an important part of my journey, but life also
          extends beyond the laboratory. This space documents selected
          moments from my academic life, research journey, cultural
          experiences, travel, sports, and personal development.
        </p>
      </motion.div>

      {/* =====================================================
          MEDIA PLATFORMS
      ====================================================== */}

      <div className="mb-24 grid gap-8 md:grid-cols-3">
        {mediaPlatforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
            className={`group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${platform.border}`}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${platform.accent}`}
            >
              {platform.label}
            </p>

            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              {platform.name}
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              {platform.description}
            </p>

            <div
              className={`mt-8 font-semibold transition group-hover:translate-x-1 ${platform.accent}`}
            >
              Visit Platform →
            </div>
          </motion.a>
        ))}
      </div>

      {/* =====================================================
          MILESTONES HEADER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          MILESTONES
        </p>

        <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
          Selected Moments
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-gray-600">
          A collection of memorable moments from my academic journey,
          cultural activities, travel, achievements, sports, and life
          in China. More milestones will be added as my journey continues.
        </p>
      </motion.div>

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* =====================================================
          MILESTONE GRID
      ====================================================== */}

      {filteredMilestones.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMilestones.map((milestone, index) => (
            <motion.article
              key={milestone.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* IMAGE */}

              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* CATEGORY */}

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                    {milestone.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                <h4 className="text-xl font-bold leading-7 text-gray-900">
                  {milestone.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {milestone.description}
                </p>

                {/* KEYWORDS */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {milestone.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-gray-300 py-16 text-center">
          <p className="text-gray-500">
            No milestones have been added to this category yet.
          </p>
        </div>
      )}

      {/* =====================================================
          CLOSING
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-gray-500">
          Connecting research, learning, creativity, culture, and everyday
          life.
        </p>
      </motion.div>
    </section>
  );
}