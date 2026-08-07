"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.5}}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-emerald-600 font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Academic Journey
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Passionate about transforming biomass waste into functional
            materials for environmental monitoring through electrochemical
            sensing, sustainable material engineering, and intelligent data
            analysis.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}

          <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <div className="sticky top-28">

              <div className="rounded-3xl overflow-hidden shadow-xl">

                <Image
                  src="/images/profile.jpg"
                  alt="Dilli Ram Acharya"
                  width={60}
                  height={70}
                  className="w-full object-cover"
                />

              </div>

              <div className="mt-8">

                <h3 className="text-2xl font-bold">
                  Dilli Ram Acharya
                </h3>

                <p className="text-emerald-600 font-medium mt-1">
                  Agricultural & Biosystems Engineer
                </p>

                <p className="text-gray-500 mt-2">
                  M.Eng. Candidate
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="lg:col-span-2"
          >

            {/* Biography */}

            <div className="mb-14">

              <h3 className="text-3xl font-bold mb-5">
                Biography
              </h3>

              <p className="text-gray-700 leading-8 mb-6">

                I am an Agricultural and Biosystems Engineer currently pursuing
                a Master of Engineering at Nanjing Agricultural University,
                China. My research focuses on developing biomass-derived
                functional materials for electrochemical sensing platforms aimed
                at environmental monitoring and sustainable resource recovery.

              </p>

              <p className="text-gray-700 leading-8">

                My work integrates biochar engineering, advanced material
                characterization, electrochemical sensor fabrication, Density
                Functional Theory (DFT), and machine learning to design
                affordable, high-performance sensing materials for agriculture
                and environmental applications.

              </p>

            </div>

            {/* Motivation */}

            <div className="mb-14">

              <h3 className="text-3xl font-bold mb-5">
                Research Motivation
              </h3>

              <p className="text-gray-700 leading-8">

                Every year, enormous quantities of agricultural and marine
                biomass are discarded despite containing valuable carbon
                resources. My goal is to convert these wastes into sustainable
                functional materials capable of replacing expensive commercial
                sensing materials. By combining biomass valorization,
                electrochemical sensing, and computational analysis, I aim to
                develop low-cost technologies that contribute to environmental
                protection and precision agriculture.

              </p>

            </div>

            {/* Philosophy */}

            <div className="mb-14">

              <h3 className="text-3xl font-bold mb-5">
                Research Philosophy
              </h3>

              <p className="text-gray-700 leading-8">

                I believe meaningful research should solve real-world problems.
                My vision is to bridge fundamental material science with
                practical environmental applications by developing sustainable
                technologies that are scientifically rigorous, economically
                affordable, and socially impactful.

              </p>

            </div>

            {/* Quick Facts */}

            <div>

              <h3 className="text-3xl font-bold mb-8">
                Quick Facts
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Nationality</p>
                  <p className="font-semibold mt-2">Nepal 🇳🇵</p>
                </div>

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Current University</p>
                  <p className="font-semibold mt-2">
                    Nanjing Agricultural University
                  </p>
                </div>

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Current Degree</p>
                  <p className="font-semibold mt-2">
                    Master of Engineering
                  </p>
                </div>

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Career Goal</p>
                  <p className="font-semibold mt-2">
                    Research Scientist
                  </p>
                </div>

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Languages</p>
                  <p className="font-semibold mt-2">
                    Nepali, English, Hindi, Chinese
                  </p>
                </div>

                <div className="border rounded-2xl p-6">
                  <p className="text-gray-500 text-sm">Research Areas</p>
                  <p className="font-semibold mt-2">
                    Biochar, Sensors, DFT, ML
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}