"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    category: "Lab Notes",
    title: "Preparing Electrochemical Solutions for Sensor Experiments",
    description:
      "Practical notes on preparing supporting electrolytes, analyte solutions, and standard solutions for electrochemical sensing experiments.",
    date: "Lab Notes",
    read: "5 min read",
  },
  {
    category: "Research",
    title: "From Biomass Waste to Functional Biochar",
    description:
      "Exploring how biomass residues can be converted into carbon-rich functional materials and their potential applications in environmental sensing.",
    date: "Research Notes",
    read: "7 min read",
  },
  {
    category: "Electrochemical Sensing",
    title: "Understanding CV, DPV, SWV and EIS in Sensor Development",
    description:
      "A practical introduction to commonly used electrochemical techniques and how they help evaluate electrode materials and sensing performance.",
    date: "Research Notes",
    read: "8 min read",
  },
  {
    category: "Materials",
    title: "Why Biochar Is Interesting for Electrochemical Sensors",
    description:
      "Notes on surface chemistry, porosity, conductivity, functional groups, and other properties that make biochar attractive for electrochemical applications.",
    date: "Materials Notes",
    read: "6 min read",
  },
  {
    category: "Computational Research",
    title: "Using DFT to Understand Sensing Mechanisms",
    description:
      "Research notes on using computational approaches to investigate adsorption, electronic structure, and possible sensing mechanisms.",
    date: "DFT Notes",
    read: "7 min read",
  },
  {
    category: "Academic Journey",
    title: "Life as a Graduate Researcher",
    description:
      "Experiences, lessons, challenges, and reflections from laboratory work, scientific writing, experiments, conferences, and academic life.",
    date: "Personal Research Journey",
    read: "5 min read",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            BLOG & LAB NOTES
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Research, Laboratory & Learning
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            A space where I document laboratory experiences, research
            ideas, experimental notes, scientific concepts, and lessons
            learned throughout my academic journey.
          </p>
        </motion.div>

        {/* ================= BLOG GRID ================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogPosts.map((post, index) => (

            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
            >

              {/* Category */}

              <div className="flex items-center justify-between">

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {post.category}
                </span>

                <span className="text-xs text-gray-400">
                  {post.read}
                </span>

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold leading-8 text-gray-900 transition group-hover:text-emerald-700">
                {post.title}
              </h3>

              {/* Description */}

              <p className="mt-4 flex-1 leading-7 text-gray-600">
                {post.description}
              </p>

              {/* Bottom */}

              <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">

                <span className="text-sm text-gray-500">
                  {post.date}
                </span>

                <button
                  type="button"
                  className="font-semibold text-emerald-600 transition group-hover:translate-x-1"
                >
                  Read →
                </button>

              </div>

            </motion.article>

          ))}

        </div>

        {/* ================= FUTURE BLOG MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">
            More laboratory notes, research articles, and academic
            experiences will be added as my research journey continues.
          </p>
        </motion.div>

      </div>
    </section>
  );
}