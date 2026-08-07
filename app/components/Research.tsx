'use client'

import { motion } from 'framer-motion'

const researchAreas = [
  {
    symbol: '01',
    title: 'Biomass Valorization',
    description:
      'Converting agricultural and marine biomass into high-value functional materials for sustainable engineering applications.',
  },
  {
    symbol: '02',
    title: 'Biochar Engineering',
    description:
      'Designing porous biomass-derived carbon materials through pyrolysis and advanced modification strategies.',
  },
  {
    symbol: '03',
    title: 'Electrochemical Sensors',
    description:
      'Developing affordable chemical sensors for environmental monitoring and food safety applications.',
  },
  {
    symbol: '04',
    title: 'Environmental Monitoring',
    description:
      'Detection of heavy metals, nitrogen pollutants, and emerging contaminants in water and agricultural systems.',
  },
  {
    symbol: '05',
    title: 'Density Functional Theory',
    description:
      'Applying computational chemistry to investigate adsorption mechanisms and electronic structures of sensing materials.',
  },
  {
    symbol: '06',
    title: 'Machine Learning',
    description:
      'Integrating machine learning with electrochemical data and biomass research for predictive analysis.',
  },
  {
    symbol: '07',
    title: 'Material Characterization',
    description:
      'Characterizing functional materials using SEM, FTIR, Raman, XRD, BET, and electrochemical techniques.',
  },
  {
    symbol: '08',
    title: 'Sustainable Materials',
    description:
      'Designing environmentally friendly materials for sensing, resource recovery, and future energy storage technologies.',
  },
]

export default function Research() {
  return (
    <section
      id="research"
      className="bg-gray-50 px-6 py-24 text-gray-900"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            RESEARCH EXPERTISE
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Research Areas
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            My research combines biomass-derived functional materials,
            electrochemical sensing, computational modeling, and data-driven
            approaches to develop sustainable technologies for environmental
            monitoring and precision agriculture.
          </p>
        </motion.div>

        {/* Research Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {researchAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:border-emerald-400 hover:shadow-xl"
            >

              {/* Number */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                {item.symbol}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}