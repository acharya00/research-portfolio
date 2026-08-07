"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2024 – 2027",
    flag: "🇨🇳",
    university: "Nanjing Agricultural University",
    country: "Nanjing, China",
    degree: "Master of Engineering",
    major: "Agricultural Mechanization Engineering",
    percentage: "87.9%",
    thesis:
      "Development of Seaweed-Derived Biochar Modified Electrochemical Sensors for Environmental Monitoring",

    courses: [
      "Agricultural Sensing",
      "Agricultural Ecology",
      "Heat & Mass Transfer",
      "Drying Principle",
      "Engineering Thermodynamics",
      "Matrix Theory",
      "Scientific Writing",
      "New Energy Utilization",
    ],

    research: [
      "Electrochemical Sensors",
      "Biochar Engineering",
      "Material Characterization",
      "Environmental Monitoring",
      "Heavy Metal Detection",
      "Nitrogen Pollutants",
    ],
  },

  {
    year: "2017 – 2022",
    flag: "🇳🇵",
    university: "Institute of Engineering, Tribhuvan University",
    country: "Dharan, Nepal",
    degree: "Bachelor of Engineering",
    major: "Agricultural Engineering",
    percentage: "74.5%",
    thesis:
      "Economic Analysis of Agricultural Custom Hiring Centers in Nepal",

    courses: [
      "Hydrology",
      "Remote Sensing",
      "GIS",
      "Soil Conservation",
      "Agricultural Machinery",
      "Statistics",
      "Irrigation Engineering",
    ],

    research: [
      "Agricultural Engineering",
      "Renewable Energy",
      "Irrigation",
      "Farm Mechanization",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            EDUCATION
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My Academic Journey
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            My academic background combines Agricultural Engineering,
            environmental sustainability, biomass valorization, and
            electrochemical sensing research.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 bottom-0 w-1 bg-emerald-600 rounded-full hidden md:block"></div>

          <div className="space-y-20">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:pl-16"
              >

                {/* Timeline Dot */}

                <div className="hidden md:flex absolute left-0 top-6 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-lg items-center justify-center">
                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-10">

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                    {/* Left */}

                    <div className="lg:w-2/3">

                      <div className="flex items-center gap-3 mb-3">

                        <span className="text-3xl">
                          {item.flag}
                        </span>

                        <div>

                          <h3 className="text-2xl font-bold">
                            {item.university}
                          </h3>

                          <p className="text-gray-500">
                            {item.country}
                          </p>

                        </div>

                      </div>

                      <h4 className="text-xl text-emerald-700 font-semibold mt-6">
                        {item.degree}
                      </h4>

                      <p className="font-medium text-gray-700">
                        {item.major}
                      </p>

                      <div className="mt-8">

                        <h5 className="font-semibold text-lg mb-2">
                          Thesis
                        </h5>

                        <p className="text-gray-600 leading-7">
                          {item.thesis}
                        </p>

                      </div>

                    </div>

                    {/* Right */}

                    <div className="lg:w-1/3">

                      <div className="bg-emerald-50 rounded-2xl p-6">

                        <h5 className="font-bold text-lg">
                          Academic Details
                        </h5>

                        <div className="space-y-3 mt-5">

                          <div>
                            <p className="text-sm text-gray-500">
                              Duration
                            </p>

                            <p className="font-semibold">
                              {item.year}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              Percentage
                            </p>

                            <p className="font-semibold">
                              {item.percentage}
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Research */}

                  <div className="mt-10">

                    <h4 className="font-bold text-lg mb-5">
                      Research Focus
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {item.research.map((skill, i) => (

                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>

                  {/* Courses */}

                  <div className="mt-10">

                    <h4 className="font-bold text-lg mb-5">
                      Selected Coursework
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {item.courses.map((course, i) => (

                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
                        >
                          {course}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}