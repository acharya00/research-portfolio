"use client";

import { motion } from "framer-motion";

const mediaPlatforms = [
  {
    name: "YouTube",
    label: "Video & Learning",
    description:
      "Sharing educational content, research experiences, learning resources, travel, and experiences from my academic journey.",
    url: "https://www.youtube.com/@learnwithdilli79",
    accent: "text-red-500",
    border: "hover:border-red-500/50",
    button: "text-red-500",
  },
  {
    name: "Facebook",
    label: "Social & Community",
    description:
      "A space for academic activities, cultural experiences, travel, personal moments, and community engagement.",
    url: "https://www.facebook.com/dillivlogs2025",
    accent: "text-blue-500",
    border: "hover:border-blue-500/50",
    button: "text-blue-500",
  },
  {
    name: "Dilli Vlogs",
    label: "Personal Journey",
    description:
      "Documenting life beyond the laboratory — travel, culture, learning, experiences, and my journey as an international student and researcher.",
    url: "https://www.youtube.com/@dillivlogs_2025",
    accent: "text-cyan-500",
    border: "hover:border-cyan-500/50",
    button: "text-cyan-500",
  },
];

export default function MediaJourney() {
  return (
    <section
      id="media"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            MEDIA JOURNEY
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Beyond Research
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Research is an important part of my journey, but life also
            extends beyond the laboratory. Through digital media, I share
            experiences related to learning, travel, culture, academic life,
            and personal growth.
          </p>
        </motion.div>

        {/* ================= MEDIA CARDS ================= */}

        <div className="grid gap-8 md:grid-cols-3">

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

              {/* Platform Label */}

              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${platform.accent}`}
              >
                {platform.label}
              </p>

              {/* Platform Name */}

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {platform.name}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-7 text-gray-600">
                {platform.description}
              </p>

              {/* Link */}

              <div
                className={`mt-8 font-semibold transition group-hover:translate-x-1 ${platform.button}`}
              >
                Visit →
              </div>

            </motion.a>
          ))}

        </div>

        {/* ================= CLOSING ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Connecting research, learning, creativity, and everyday life.
          </p>
        </motion.div>

      </div>
    </section>
  );
}