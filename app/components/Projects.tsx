"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Droplets,
  Leaf,
  Atom,
  Activity,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    icon: FlaskConical,
    status: "Current Research",
    title: "Seaweed-Derived Biochar for Electrochemical Sensing",
    subtitle:
      "Biomass valorization · Biochar engineering · Environmental sensing",
    description:
      "Developing functional biochar materials derived from seaweed biomass for application in electrochemical sensing. The project investigates how biomass conversion and material engineering can produce affordable and sustainable sensing platforms for environmental pollutant detection.",
    focus: [
      "Seaweed biomass valorization",
      "Biochar preparation and engineering",
      "Electrochemical sensor fabrication",
      "Environmental pollutant detection",
    ],
  },

  {
    number: "02",
    icon: Activity,
    status: "Research Project",
    title: "Electrochemical Detection of Cd²⁺ in Environmental Systems",
    subtitle:
      "Biochar-based sensor · Heavy-metal detection · Electroanalysis",
    description:
      "Investigating kelp-derived biochar as a sustainable electrode modifier for sensitive electrochemical detection of cadmium ions. The work combines material characterization, electrode modification, electrochemical measurements, and computational analysis to understand sensor performance.",
    focus: [
      "Cd²⁺ detection",
      "Biochar-modified electrodes",
      "CV, EIS, DPV and SWV",
      "Adsorption and sensing mechanisms",
    ],
  },

  {
    number: "03",
    icon: Droplets,
    status: "Research Project",
    title: "Simultaneous Detection of Nitrate and Nitrite",
    subtitle:
      "Dissolved inorganic nitrogen · Electrochemical sensing · Aquaculture",
    description:
      "Developing an electrochemical sensing platform for the detection of nitrate and nitrite, with particular relevance to aquatic and agricultural environments. The project aims to support affordable monitoring of nitrogen pollutants using biomass-derived carbon materials.",
    focus: [
      "Nitrate and nitrite detection",
      "Aquaculture water monitoring",
      "Electrochemical analysis",
      "Sustainable carbon materials",
    ],
  },

  {
    number: "04",
    icon: Atom,
    status: "Computational Research",
    title: "DFT-Based Investigation of Biochar Sensing Mechanisms",
    subtitle:
      "Density Functional Theory · Electronic structure · Adsorption",
    description:
      "Applying computational chemistry to investigate the electronic and adsorption properties of carbon-based sensing materials. The work uses molecular models and electronic-structure descriptors to understand interactions between sensing materials and target pollutants.",
    focus: [
      "HOMO–LUMO analysis",
      "Electrostatic potential",
      "ALIE and IRI analysis",
      "Adsorption energy",
    ],
  },

  {
    number: "05",
    icon: Leaf,
    status: "Sustainability Research",
    title: "Biomass Valorization for Sustainable Functional Materials",
    subtitle:
      "Waste-to-value · Sustainable materials · Resource recovery",
    description:
      "Exploring the conversion of underutilized agricultural and marine biomass into value-added carbon materials. The broader objective is to connect biomass waste management with the development of functional materials for environmental and engineering applications.",
    focus: [
      "Agricultural biomass",
      "Marine biomass",
      "Waste-to-value strategies",
      "Sustainable material development",
    ],
  },

  {
    number: "06",
    icon: BarChart3,
    status: "Future Research Direction",
    title: "Data-Driven Biomass and Environmental Research",
    subtitle:
      "Machine learning · Data analysis · Sustainable engineering",
    description:
      "Exploring machine learning and data-driven approaches for biomass research, material development, and environmental applications. The goal is to complement experimental research with predictive analysis and intelligent interpretation of complex datasets.",
    focus: [
      "Machine learning",
      "Experimental data analysis",
      "Predictive modeling",
      "Research optimization",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Research Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            From Biomass to Functional Technology
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            My research explores how biomass-derived materials can be
            engineered and combined with electrochemical, computational,
            and data-driven approaches to address environmental challenges.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl sm:p-8"
              >

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="flex items-start justify-between gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-50">
                    <Icon size={23} />
                  </div>

                  <span className="text-3xl font-bold text-gray-100">
                    {project.number}
                  </span>

                </div>

                {/* =================================================
                    STATUS
                ================================================= */}

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {project.status}
                </p>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="mt-3 text-2xl font-bold leading-tight text-gray-900">
                  {project.title}
                </h3>

                {/* =================================================
                    SUBTITLE
                ================================================= */}

                <p className="mt-3 text-sm font-medium leading-6 text-gray-500">
                  {project.subtitle}
                </p>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-6 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* =================================================
                    FOCUS
                ================================================= */}

                <div className="mt-7 border-t border-gray-100 pt-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Key Focus
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {project.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-emerald-200 hover:text-emerald-700"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* =====================================================
            RESEARCH DIRECTION
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10"
        >

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Research Direction
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Sustainable Materials for Affordable Environmental Monitoring
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-gray-600">
                My long-term research direction is to integrate biomass
                valorization, functional carbon materials, electrochemical
                sensing, computational chemistry, and data-driven methods
                to develop scientifically rigorous and practically
                accessible technologies for environmental monitoring.
              </p>

            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white text-emerald-600 shadow-sm">
              <FlaskConical size={28} />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}