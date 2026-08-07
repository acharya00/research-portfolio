import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaResearchgate,
  FaGoogle,
} from "react-icons/fa";
export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Dilli Ram Acharya
          </h1>

          <p className="text-2xl text-slate-300 mb-8">
            Agricultural Engineer • Researcher • Science Communicator
          </p>

          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-8">
            Agricultural Engineering researcher at Nanjing Agricultural
            University working at the intersection of biochar-derived
            functional materials, electrochemical sensing, environmental
            monitoring, machine learning, and computational materials science.
            My research focuses on developing sustainable sensing technologies
            and advanced materials for agricultural and environmental
            applications.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/publications"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
            >
              Publications
            </a>

            <a
              href="/research"
              className="border border-slate-500 px-6 py-3 rounded-lg"
            >
              Research Areas
            </a>
          </div>

        </div>
      </section>

      {/* Research Interests */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Biochar & Nanobiochar
              </h3>

              <p className="text-slate-400">
                Biomass-derived functional materials for environmental
                remediation, sensing platforms, resource recovery,
                and sustainable agricultural applications.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Electrochemical Sensing
              </h3>

              <p className="text-slate-400">
                Development of advanced electrochemical sensors
                for heavy metals, nitrate, nitrite, and environmental
                pollutant monitoring.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Machine Learning & DFT
              </h3>

              <p className="text-slate-400">
                Combining computational modeling, machine learning,
                and materials science for intelligent sensor design.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* About Me */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            About Me
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            I am an Agricultural Engineering researcher at Nanjing Agricultural
            University, China, with research interests spanning biochar and
            biomass-derived functional materials, electrochemical sensing,
            environmental monitoring, machine learning, and computational
            materials science.
          </p>

          <p className="text-lg leading-8 text-slate-300 mt-6">
            My work focuses on developing nanobiochar-based electrochemical
            sensing platforms for environmental monitoring and sustainable
            agricultural applications. I have experience in biomass pyrolysis,
            electrode fabrication, electrochemical characterization, and
            materials analysis using advanced experimental and computational
            approaches.
          </p>

        </div>
      </section>

      {/* Education */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Education
          </h2>

          <div className="space-y-10">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold">
                Nanjing Agricultural University
              </h3>

              <p className="text-slate-300 mt-2">
                Master of Engineering in Agricultural Mechanization Engineering
              </p>

              <p className="text-slate-500">
                2024 – 2027
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold">
                Institute of Engineering (Tribhuvan University)
              </h3>

              <p className="text-slate-300 mt-2">
                Bachelor of Engineering in Agricultural Engineering
              </p>

              <p className="text-slate-500">
                Graduated in 2022
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Publications */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Publications
          </h2>

          <div className="space-y-8">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                Chronocatalytic mineral depletion-defect nucleation cascade in
                ball-milled Laminaria japonica biochar enables valley-graphitic
                nitrogen dyads for sensitive Cd²⁺ electrosensing
              </h3>

              <p className="text-slate-400 mt-3">
                Bioresource Technology (Under Review)
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                Microwave-coupled molten potassium salt engineering structurally
                separates boron/nitrogen-biocarbon for signal-amplified
                multiplexed electrodetection of Cd²⁺, Pb²⁺ and Hg²⁺
                micropollutants
              </h3>

              <p className="text-slate-400 mt-3">
                Journal of Colloid and Interface Science (2026)
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                Dual-role boron and oxidized phosphorus in collectively
                constructing the signal-amplified bio-carbon electroanalysis
                platforms for simultaneous recognition of sulfite and nitrite
                in aquaculture
              </h3>

              <p className="text-slate-400 mt-3">
                Sensors and Actuators B: Chemical (2026)
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Awards */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="space-y-6">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                China Scholarship Council (CSC)
              </h3>
              <p className="text-slate-400">
                Fully Funded Master's Scholarship
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                Winner – Perceiving China 2025 Essay Competition
              </h3>
              <p className="text-slate-400">
                Nanjing Agricultural University
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-white text-2xl font-semibold mb-4">
            Dilli Ram Acharya
          </h3>

          <p>
            Agricultural Engineer • Researcher • Science Communicator
          </p>

          <p className="mt-4">
            Biochar • Electrochemical Sensing • Machine Learning • DFT
          </p>

          <p className="mt-6 text-sm">
            © 2026 Dilli Ram Acharya. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}