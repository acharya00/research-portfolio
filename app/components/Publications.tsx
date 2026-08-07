"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title:
      "Dual-role boron and oxidized phosphorus in collectively constructing the signal-amplified bio-carbon electroanalysis platforms for simultaneous recognition of sulfite and nitrite in aquaculture.",
    journal: "Sensors & Actuators B: Chemical",
    year: "2026",
    role: "Co-author",
    quartile: "Q1",
    impact: "IF 8.4",
    status: "Published",
    doi: "https://doi.org/10.1016/j.snb.2025.138906",
    authors:
      "Shen Y., Li K., Xue Y., Ma C., Cheng J., Miao S., **Dilli Ram Acharya**",
  },

  {
    title:
      "Microwave-coupled molten potassium salt engineering structurally separates boron/nitrogen-biocarbon for signal-amplified multiplexed electrodetection of Cd²⁺, Pb²⁺ and Hg²⁺ micropollutants.",
    journal: "Journal of Colloid and Interface Science",
    year: "2025",
    role: "Co-author",
    quartile: "Q1",
    impact: "IF 9.9",
    status: "Published",
    doi: "https://doi.org/10.1016/j.jcis.2025.139615",
    authors:
      "Shen Y., Li K., Xue Y., Ma C., Cheng J., Li M., **Dilli Ram Acharya**",
  },

  {
    title:
      "Assessment of Climate Change Impact on Future Water Availability and Irrigation Demand: A Case Study of the Chanda Mohana Irrigation Project, Nepal.",
    journal: "H2Open Journal",
    year: "2026",
    role: "Co-author",
    quartile: "Q2",
    impact: "Open Access",
    status: "Published",
    doi: "https://doi.org/10.1016/j.htopen.2026.100039",
    authors:
      "Rai S., Chand J., **Dilli Ram Acharya**, Poudyal K.N.",
  },

  {
    title:
      "Chronocatalytic mineral depletion-defect nucleation cascade in ball-milled Laminaria japonica biochar enables valley-graphitic nitrogen dyads for sensitive Cd²⁺ electrosensing.",
    journal: "Bioresource Technology",
    year: "2027",
    role: "First Author",
    quartile: "Q1",
    impact: "Under Review",
    status: "Under Review",
    doi: "",
    authors:
      "**Dilli Ram Acharya**, Li K., Shen Y., Wang D., Muhammed I.B.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            Publications
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Selected Research Publications
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            My research focuses on biomass-derived functional materials,
            electrochemical sensing, environmental monitoring, and sustainable
            engineering.
          </p>

        </div>

        <div className="space-y-8">

          {publications.map((paper, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-xl transition"
            >

              <div className="flex justify-between items-start flex-wrap gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-5">

                    <FileText className="text-emerald-600" size={28} />

                    <h3 className="text-2xl font-bold">
                      {paper.journal}
                    </h3>

                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">

                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      {paper.status}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                      {paper.quartile}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                      {paper.impact}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
                      {paper.role}
                    </span>

                  </div>

                  <h4 className="text-xl font-semibold leading-8 mb-5">
                    {paper.title}
                  </h4>

                  <p
                    className="text-gray-600 leading-8"
                    dangerouslySetInnerHTML={{ __html: paper.authors }}
                  />

                </div>

                <div className="flex flex-col items-end gap-4">

                  <div className="text-2xl font-bold text-gray-400">
                    {paper.year}
                  </div>

                  {paper.doi ? (
                    <a
                      href={paper.doi}
                      target="_blank"
                      className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition"
                    >
                      <ExternalLink size={18} />
                      DOI
                    </a>
                  ) : (
                    <div className="text-sm italic text-gray-400">
                      DOI available after publication
                    </div>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}