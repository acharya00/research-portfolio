"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Microscope,
  Leaf,
  Atom,
  BrainCircuit,
  Code2,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const skills = [
  {
    title: "Electrochemical Techniques",
    icon: FlaskConical,
    items: [
      "Cyclic Voltammetry (CV)",
      "Differential Pulse Voltammetry (DPV)",
      "Square Wave Voltammetry (SWV)",
      "Electrochemical Impedance Spectroscopy (EIS)",
      "Electrochemical Sensor Fabrication",
    ],
  },

  {
    title: "Material Characterization",
    icon: Microscope,
    items: [
      "SEM",
      "FTIR",
      "Raman Spectroscopy",
      "XRD",
      "BET Surface Area",
    ],
  },

  {
    title: "Biomass Processing",
    icon: Leaf,
    items: [
      "Biochar Synthesis",
      "Nanobiochar Engineering",
      "Pyrolysis",
      "Ball Milling",
      "Electrode Surface Modification",
    ],
  },

  {
    title: "Computational Chemistry",
    icon: Atom,
    items: [
      "Density Functional Theory",
      "Gaussian",
      "GaussView",
      "Multiwfn",
      "VMD",
    ],
  },

  {
    title: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "Random Forest",
      "XGBoost",
      "Artificial Neural Networks",
      "Response Surface Methodology",
    ],
  },

  {
    title: "Programming & Analysis",
    icon: Code2,
    items: [
      "Python",
      "OriginPro",
      "Design Expert",
      "Microsoft Excel",
    ],
  },

  {
    title: "Research Skills",
    icon: BookOpen,
    items: [
      "Scientific Writing",
      "Literature Review",
      "Experimental Design",
      "Academic Presentation",
      "Data Interpretation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            TECHNICAL EXPERTISE
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Research Skills & Laboratory Techniques
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            My research combines electrochemistry, biomass-derived materials,
            computational chemistry, and machine learning to develop
            sustainable sensing technologies for environmental and agricultural
            applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-emerald-700" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {skill.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />

                      <span className="text-gray-700">
                        {item}
                      </span>
                    </div>
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