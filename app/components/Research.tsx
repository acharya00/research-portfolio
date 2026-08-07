"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Cpu,
  Atom,
  BarChart3,
  Microscope,
  Recycle,
  Waves,
} from "lucide-react";

const researchAreas = [
  {
    icon: Leaf,
    title: "Biomass Valorization",
    description:
      "Converting agricultural and marine biomass into high-value functional materials for sustainable engineering applications.",
  },
  {
    icon: Recycle,
    title: "Biochar Engineering",
    description:
      "Designing porous biomass-derived carbon materials through pyrolysis and advanced modification strategies.",
  },
  {
    icon: FlaskConical,
    title: "Electrochemical Sensors",
    description:
      "Developing affordable chemical sensors for environmental monitoring and food safety applications.",
  },
  {
    icon: Waves,
    title: "Environmental Monitoring",
    description:
      "Detection of heavy metals, nitrogen pollutants, and emerging contaminants in water and agricultural systems.",
  },
  {
    icon: Atom,
    title: "Density Functional Theory",
    description:
      "Applying computational chemistry to investigate adsorption mechanisms and electronic structures of sensing materials.",
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    description:
      "Integrating machine learning with electrochemical data and biomass research for predictive analysis.",
  },
  {
    icon: Microscope,
    title: "Material Characterization",
    description:
      "Characterizing functional materials using SEM, FTIR, Raman, XRD, BET, and electrochemical techniques.",
  },
  {
    icon: Cpu,
    title: "Sustainable Materials",
    description:
      "Designing environmentally friendly materials for sensing, resource recovery, and future energy storage technologies.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            RESEARCH EXPERTISE
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Research Areas
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            My research combines biomass-derived functional materials,
            electrochemical sensing, computational modeling, and data-driven
            approaches to develop sustainable technologies for environmental
            monitoring and precision agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {researchAreas.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">

                  <Icon className="text-emerald-700 w-7 h-7" />

                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}