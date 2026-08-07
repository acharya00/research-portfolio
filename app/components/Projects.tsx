"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Leaf,
  FlaskConical,
  Cpu,
  Droplets,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "Seaweed-Derived Nanobiochar for Heavy Metal Detection",
    status: "Ongoing",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-700",
    techniques: [
      "Biochar",
      "Pyrolysis",
      "Ball Milling",
      "CV",
      "DPV",
      "EIS",
    ],
    description:
      "Development of biomass-derived nanobiochar from Laminaria japonica for highly sensitive electrochemical detection of heavy metals through electrode surface engineering.",
  },

  {
    title: "Electrochemical Detection of Nitrate & Nitrite",
    status: "Current Research",
    icon: Droplets,
    color: "bg-blue-100 text-blue-700",
    techniques: [
      "Electrochemistry",
      "Chemical Sensors",
      "Na₂SO₄ Electrolyte",
      "Screen Printed Electrodes",
    ],
    description:
      "Designing low-cost biochar-modified electrochemical sensing platforms for rapid nitrate and nitrite detection in agricultural soils and irrigation water.",
  },

  {
    title: "Biochar Engineering & Material Characterization",
    status: "Completed",
    icon: Microscope,
    color: "bg-purple-100 text-purple-700",
    techniques: [
      "SEM",
      "FTIR",
      "XRD",
      "BET",
      "Raman",
    ],
    description:
      "Investigating morphology, porosity, surface chemistry and structural evolution of biomass-derived functional carbon materials using advanced characterization techniques.",
  },

  {
    title: "Density Functional Theory (DFT) Investigation",
    status: "Ongoing",
    icon: Cpu,
    color: "bg-orange-100 text-orange-700",
    techniques: [
      "Gaussian",
      "Multiwfn",
      "GaussView",
      "VMD",
    ],
    description:
      "Using first-principles calculations to understand adsorption mechanisms, electronic properties and active sites responsible for electrochemical sensing performance.",
  },

  {
    title: "Machine Learning Assisted Biomass Research",
    status: "Future Direction",
    icon: Database,
    color: "bg-cyan-100 text-cyan-700",
    techniques: [
      "Random Forest",
      "XGBoost",
      "ANN",
      "Python",
    ],
    description:
      "Integrating machine learning models with biomass characterization and electrochemical sensing datasets for prediction, optimization and intelligent sensor design.",
  },

  {
    title: "Climate Change & Irrigation Water Assessment",
    status: "Published",
    icon: FlaskConical,
    color: "bg-green-100 text-green-700",
    techniques: [
      "Hydrology",
      "Climate Change",
      "Water Resources",
    ],
    description:
      "Assessment of future water availability and irrigation demand under changing climatic scenarios for sustainable agricultural water management in Nepal.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            RESEARCH PROJECTS
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Research & Development
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            My research combines biomass valorization, electrochemical sensing,
            computational chemistry, and data-driven approaches to develop
            sustainable materials for environmental and agricultural
            applications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >

                <div className="flex justify-between items-center mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Icon className="text-emerald-700" size={28} />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${project.color}`}
                  >
                    {project.status}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.techniques.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}