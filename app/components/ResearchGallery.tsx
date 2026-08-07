"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    title: "Electrochemical Workstation",
    category: "Laboratory",
    image: "/gallery/workstation.jpg",
    description: "CV • DPV • EIS • SWV",
  },
  {
    title: "Biochar Preparation",
    category: "Laboratory",
    image: "/gallery/biomasssample.jpg",
    description: "Pyrolysis • Ball Milling",
  },
  {
    title: "Electrode Fabrication",
    category: "Laboratory",
    image: "/gallery/electrode.jpg",
    description: "GCE Modification",
  },
  {
    title: "Biochar Sample",
    category: "Laboratory",
    image: "/gallery/biochar.jpg",
    description: "Prepared nanobiochar material",
  },
  {
    title: "Pyrolysis Process",
    category: "Laboratory",
    image: "/gallery/pyrolysis.jpg",
    description: "Thermal decomposition of biomass",
  },
  {
    title: "Three-Electrode System",
    category: "Laboratory",
    image: "/gallery/threeelectrode.jpg",
    description: "Electrochemical setup",
  },
];

export default function ResearchGallery() {
  return (
    <section id="gallery" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            RESEARCH GALLERY
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Research Journey
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            A visual overview of laboratory experiments, material synthesis,
            characterization, computational studies, and research activities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {gallery.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm border hover:shadow-xl"
            >
             <div className="relative h-56 w-full">
  <Image
    src={item.image}
    alt={item.title}
    width={600}
    height={400}
    className="object-cover w-full h-full"
  />
</div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-emerald-600 font-semibold">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}