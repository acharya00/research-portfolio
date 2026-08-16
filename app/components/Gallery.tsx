"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const milestones = [
  {
    id: 1,
    image: "/gallery/labgroup.jpg",
    category: "Research & Labworks",
    title: "Smart Biomass Materials and Equipment Group",
    description:
      "Research group of the Smart Biomass Materials and Equipment Laboratory at Nanjing Agricultural University, representing my scientific research environment.",
  },
  {
    id: 2,
    image: "/gallery/workstation.jpg",
    category: "Research & Labworks",
    title: "Electrochemical Workstation",
    description:
      "Electrochemical measurements performed using an electrochemical workstation to investigate electrode behavior, charge-transfer characteristics, and sensing performance.",
  },
  {
    id: 3,
    image: "/gallery/biomasssamples.jpg",
    category: "Research & Labworks",
    title: "Biomass Samples for Research",
    description:
      "Preparation and collection of biomass samples used as feedstock for thermochemical conversion and the development of biomass-derived functional materials.",
  },
  {
    id: 4,
    image: "/gallery/biochar.jpg",
    category: "Research & Labworks",
    title: "Biomass-Derived Biochar",
    description:
      "Biomass-derived biochar prepared for physicochemical characterization and electrochemical applications — a sustainable carbon-based platform for pollutant detection.",
  },
  {
    id: 5,
    image: "/gallery/electrode.jpg",
    category: "Research & Labworks",
    title: "Electrode Fabrication",
    description:
      "Fabrication and modification of glassy carbon electrodes with biochar-based sensing materials for electrochemical analysis.",
  },
  {
    id: 6,
    image: "/gallery/pyrolysis.jpg",
    category: "Research & Labworks",
    title: "Pyrolysis Process",
    description:
      "Thermal decomposition of biomass feedstock during biochar preparation in the laboratory.",
  },
  {
    id: 7,
    image: "/gallery/threeelectrode.jpg",
    category: "Research & Labworks",
    title: "Three-Electrode System",
    description:
      "Electrochemical setup with working, reference, and counter electrodes for sensing experiments.",
  },
  {
    id: 8,
    image: "/gallery/ballmilling.jpg",
    category: "Research & Labworks",
    title: "Ball Milling of Biochar",
    description:
      "Ball-milling process used to engineer the physicochemical properties of biochar for enhanced sensing performance.",
  },
  {
    id: 9,
    image: "/gallery/expo.jpg",
    category: "Research & Labworks",
    title: "Jiangsu Agricultural Machinery Fair",
    description:
      "Exploring recent innovations in agricultural machinery, automation, and engineering technologies at the Jiangsu Agricultural Machinery Fair in Nanjing.",
  },
  {
    id: 10,
    image: "/gallery/sportsevent025.jpg",
    category: "Academic Activities",
    title: "University Sports Event 2025",
    description:
      "Representing the College of International Education as the flag bearer during the university sports event.",
  },
  {
    id: 11,
    image: "/gallery/graduatehiking.jpg",
    category: "Academic Activities",
    title: "NAU Graduate Student Hiking Activity",
    description:
      "A hiking activity organized with Chinese and international graduate students, promoting cultural exchange, teamwork, and academic community engagement.",
  },
  {
    id: 12,
    image: "/gallery/milestone_1.jpg",
    category: "Achievements",
    title: "Perceiving China — Essay Writing Competition",
    description:
      "A memorable academic and cultural milestone — winner of the essay writing competition during the Perceiving China program.",
  },
  {
    id: 13,
    image: "/gallery/HSK3.jpg",
    category: "Achievements",
    title: "HSK Level 3 — Chinese Proficiency",
    description:
      "Certificate of Chinese language proficiency (HSK Level 3), supporting my international academic journey in China.",
  },
  {
    id: 14,
    image: "/gallery/scientific_paper_writing.jpg",
    category: "Achievements",
    title: "Scientific Paper Writing Workshop",
    description:
      "Certificate from a scientific paper writing and research communication workshop during my graduate studies.",
  },
  {
    id: 15,
    image: "/gallery/milestone_2.jpg",
    category: "Cultural Activities",
    title: "Cultural Visit to Qixia Mountain",
    description:
      "A cultural visit to Qixia Mountain in Nanjing with international and Chinese students, exploring local heritage, culture, and the surrounding landscape.",
  },
  {
    id: 16,
    image: "/gallery/milestone_4.jpg",
    category: "Cultural Activities",
    title: "Exploring Taizhou",
    description:
      "A cultural exploration of Taizhou, China, experiencing the local environment, culture, and everyday life beyond the university.",
  },
  {
    id: 17,
    image: "/gallery/suzhou.jpg",
    category: "Cultural Activities",
    title: "Suzhou Museum Cultural Visit",
    description:
      "Exploring Chinese history, traditional culture, modern architecture, and artistic heritage through a visit to Suzhou Museum.",
  },
  {
    id: 18,
    image: "/gallery/milestone_6.jpg",
    category: "Academic & Cultural",
    title: "Perceiving China — Yangzhou",
    description:
      "A memorable experience in Yangzhou as part of the Perceiving China program, combining cultural exploration, learning, and international student exchange.",
  },
  {
    id: 19,
    image: "/gallery/milestone_3.jpg",
    category: "Travel",
    title: "Exploring Shanghai",
    description:
      "A travel experience in Shanghai, capturing a memorable moment while exploring one of China's major cities.",
  },
  {
    id: 20,
    image: "/gallery/beijing.jpg",
    category: "Travel",
    title: "Exploring the Great Wall of China",
    description:
      "A cultural exploration visit to the Great Wall of China, experiencing one of the world's most remarkable historical landmarks.",
  },
  {
    id: 21,
    image: "/gallery/basecamp.jpg",
    category: "Travel",
    title: "Number Mountain Basecamp Hiking, Nepal",
    description:
      "An adventure hiking experience to the basecamp of Number Mountain in Nepal, exploring Himalayan landscapes, natural ecosystems, and outdoor learning.",
  },
  {
    id: 22,
    image: "/gallery/thailand.jpg",
    category: "Travel",
    title: "Phi Phi Island Exploration, Thailand",
    description:
      "A travel experience exploring the natural beauty, marine environment, and cultural diversity of Phi Phi Island, Thailand.",
  },
  {
    id: 23,
    image: "/gallery/milestone_5.jpg",
    category: "Sports & Activities",
    title: "Road and Belt Badminton Competition 2026",
    description:
      "Participation in the Road and Belt Badminton Competition 2026 in Taizhou, combining international student activities, sports, and cultural exchange.",
  },
  {
    id: 24,
    image: "/gallery/volleyball.jpg",
    category: "Sports & Activities",
    title: "Volleyball Event",
    description:
      "Participating in volleyball activities with fellow students, combining sports and community engagement.",
  },
];

const filters = [
  "All Milestones",
  "Research & Labworks",
  "Academic Activities",
  "Achievements",
  "Cultural Activities",
  "Academic & Cultural",
  "Travel",
  "Sports & Activities",
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            GALLERY
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            My Journey in Pictures
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Selected moments from my research journey, laboratory work,
            academic activities, achievements, cultural experiences, travel,
            and life in China.
          </p>
        </motion.div>

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

        {filteredMilestones.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                      {milestone.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h4 className="text-xl font-bold leading-7 text-gray-900">
                    {milestone.title}
                  </h4>

                  <p className="mt-4 leading-7 text-gray-600">
                    {milestone.description}
                  </p>
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
      </div>
    </section>
  );
}
