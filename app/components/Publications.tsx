"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

const published = [
  {
    number: "01",
    title:
      "Dual-role boron and oxidized phosphorus in collectively constructing the signal-amplified bio-carbon electroanalysis platforms for simultaneous recognition of sulfite and nitrite in aquaculture.",
    journal: "Sensors & Actuators B: Chemical",
    year: "2025",
    role: "Co-author",
    quartile: "Q1",
    impact: "IF 8.4",
    doi: "https://doi.org/10.1016/j.snb.2025.138906",
    authorsBefore: [
      "Shen Y.",
      "Li K.",
      "Xue Y.",
      "Ma C.",
      "Cheng J.",
      "Miao S.",
    ],
    authorsAfter: [],
  },
  {
    number: "02",
    title:
      "Microwave-coupled molten potassium salt engineering structurally separates boron/nitrogen-biocarbon for signal-amplified multiplexed electrodetection of Cd²⁺, Pb²⁺ and Hg²⁺ micropollutants.",
    journal: "Journal of Colloid and Interface Science",
    year: "2025",
    role: "Co-author",
    quartile: "Q1",
    impact: "IF 9.9",
    doi: "https://doi.org/10.1016/j.jcis.2025.139615",
    authorsBefore: [
      "Shen Y.",
      "Li K.",
      "Xue Y.",
      "Ma C.",
      "Cheng J.",
      "Li M.",
    ],
    authorsAfter: [],
  },
  {
    number: "03",
    title:
      "Assessment of Climate Change Impact on Future Water Availability and Irrigation Demand: A Case Study of the Chanda Mohana Irrigation Project, Nepal.",
    journal: "H2Open Journal",
    year: "2026",
    role: "Co-author",
    quartile: "Q2",
    impact: "Open Access",
    doi: "https://doi.org/10.1016/j.htopen.2026.100039",
    authorsBefore: ["Rai S.", "Chand J."],
    authorsAfter: ["Poudyal K.N."],
  },
];

const underReview = [
  {
    number: "04",
    title:
      "Microwave-driven dual-role boron engineering spatially couples in-plane pentagonal defects and edge boron-nitrogen in biocarbon for enrichment-free simultaneous Zn2+/NO2- electrosensing.",
    journal: "Chemical Engineering Journal",
    role: "Co-author",
    quartile: "Q1",
    impact: "IF 13.9",
    authorsBefore: [
      "Shen Y.",
      "Li K.",
      "Xue Y.",
      "Ma C.",
      "Cheng J.",
      "Li M.",
    ],
    authorsAfter: [],
  },
  {
    number: "05",
    title:
      "Chronocatalytic mineral depletion-defect nucleation cascade in ball-milled Laminaria japonica biochar enables valley-graphitic nitrogen dyads for sensitive Cd²⁺ electrosensing.",
    journal: "Bioresource Technology",
    role: "First Author",
    quartile: "Q1",
    authorsBefore: [],
    authorsAfter: [
      "Li K.",
      "Shen Y.",
      "Wang D.",
      "Muhammed I.B.",
    ],
  },
];

type Paper = {
  number: string;
  title: string;
  journal: string;
  year?: string;
  role: string;
  quartile: string;
  impact?: string;
  doi?: string;
  authorsBefore: string[];
  authorsAfter: string[];
};

function AuthorList({ paper }: { paper: Paper }) {
  return (
    <p className="mt-5 text-sm leading-7 text-gray-600">
      {paper.authorsBefore.map((author, i) => (
        <span key={author}>
          {i > 0 && ", "}
          {author}
        </span>
      ))}
      {paper.authorsBefore.length > 0 && ", "}
      <strong className="font-bold text-gray-950">Acharya D.R.</strong>
      {paper.authorsAfter.length > 0 && ", "}
      {paper.authorsAfter.map((author, i) => (
        <span key={author}>
          {i > 0 && ", "}
          {author}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  return (
    <section
      id="publications"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Publications
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Selected Research Publications
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Selected research contributions in biomass valorization, biochar
            engineering, electrochemical sensing, environmental monitoring,
            and sustainable engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
          {published.map((paper, index) => (
            <motion.article
              key={paper.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
            >
              <div className="p-7 sm:p-9 lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-700">
                        {paper.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-emerald-600" />
                          <p className="font-bold text-gray-900">
                            {paper.journal}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {paper.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Published
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {paper.quartile}
                      </span>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                        {paper.impact}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          paper.role === "First Author"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {paper.role}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-8 text-gray-900 sm:text-2xl">
                      {paper.title}
                    </h3>

                    <AuthorList paper={paper} />
                  </div>

                  <div className="flex shrink-0 flex-row items-center justify-between gap-5 lg:w-32 lg:flex-col lg:items-end lg:justify-start">
                    <span className="text-3xl font-bold text-gray-200">
                      {paper.year}
                    </span>
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg"
                    >
                      DOI
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Under Review
              </span>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Manuscripts in Review
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              {underReview.map((paper, index) => (
                <motion.div
                  key={paper.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      In Review
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {paper.quartile}
                    </span>
                    {paper.impact ? (
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                        {paper.impact}
                      </span>
                    ) : null}
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        paper.role === "First Author"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {paper.role}
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg font-bold leading-7 text-gray-900">
                    {paper.title}
                  </h4>

                  <p className="mt-3 text-sm font-semibold text-gray-600">
                    {paper.journal}
                  </p>

                  <AuthorList paper={paper} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
