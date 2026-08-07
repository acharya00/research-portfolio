"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    number: "4+",
    title: "Publications",
    subtitle: "SCI & International Journals",
  },
  {
    number: "3+",
    title: "Research Projects",
    subtitle: "Environmental & Sensor Research",
  },
  {
    number: "12+",
    title: "Technical Skills",
    subtitle: "Electrochemistry, DFT & ML",
  },
  {
    number: "2",
    title: "Degrees",
    subtitle: "Agricultural Engineering",
  },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="text-center"
            >

              <h2 className="text-5xl font-bold mb-3">
                {item.number}
              </h2>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-emerald-100 mt-2">
                {item.subtitle}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}