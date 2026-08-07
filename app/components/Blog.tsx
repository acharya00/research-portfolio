"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Leaf,
} from "lucide-react";

const posts = [
  {
    icon: FlaskConical,
    category: "Research",
    title: "From Biomass Waste to Functional Biochar",
    description:
      "Exploring how biomass residues can be transformed into functional carbon materials for environmental and electrochemical applications.",
    date: "Research Notes",
  },

  {
    icon: BookOpen,
    category: "Electrochemical Sensing",
    title: "Why Biochar Is Promising for Chemical Sensors",
    description:
      "A research-oriented discussion of the structural, chemical, and economic characteristics that make biochar attractive for sensor development.",
    date: "Research Notes",
  },

  {
    icon: Leaf,
    category: "Sustainability",
    title: "Biomass Valorization and Sustainable Engineering",
    description:
      "Understanding how waste biomass can be converted into value-added materials while supporting resource efficiency and environmental sustainability.",
    date: "Research Notes",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-gray-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Research Notes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Blog & Insights
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notes, ideas, and accessible discussions about research,
            sustainable materials, electrochemical sensing, and
            environmental engineering.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3">

          {posts.map((post, index) => {
            const Icon = post.icon;

            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-emerald-600">
                  <Icon size={23} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {post.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-gray-900">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {post.description}
                </p>

                <div className="mt-7 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>

                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition group-hover:text-emerald-600"
                  >
                    Coming soon
                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}