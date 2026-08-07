import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">

      <div className="mx-auto max-w-6xl">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            About Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Dilli Ram Acharya
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-cyan-500" />

        </div>


        {/* ================= INTRODUCTION ================= */}
        <div className="grid items-start gap-12 lg:grid-cols-5">

          {/* PROFILE IMAGE */}
          <div className="lg:col-span-2">

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">

              <Image
                src="/images/profile.jpg"
                alt="Dilli Ram Acharya"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
              />

            </div>

          </div>


          {/* BIOGRAPHY */}
          <div className="lg:col-span-3">

            <h2 className="text-2xl font-bold">
              Researcher & Agricultural and Biosystems Engineer
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              I am Dilli Ram Acharya, an Agricultural and Biosystems
              Engineer and M.Eng. researcher at Nanjing Agricultural
              University, China. My research focuses on developing
              sustainable, biomass-derived functional materials for
              environmental applications.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              My research motivation comes from two interconnected
              interests: converting biomass waste into valuable
              functional materials and developing affordable chemical
              sensing technologies for environmental monitoring. I
              particularly focus on biochar as a sustainable and
              versatile material for electrochemical sensor development.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              My current research combines biomass valorization,
              biochar engineering, material characterization,
              electrochemical sensing, Density Functional Theory (DFT),
              and machine learning to develop practical solutions for
              environmental monitoring.
            </p>


            {/* RESEARCH INTERESTS */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold">
                Research Interests
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">

                {[
                  'Biomass Valorization',
                  'Biochar',
                  'Chemical Sensors',
                  'Electrochemical Sensing',
                  'Environmental Monitoring',
                  'Material Characterization',
                  'Density Functional Theory',
                  'Machine Learning',
                  'Sustainable Materials',
                ].map((interest) => (

                  <span
                    key={interest}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 transition hover:border-cyan-400 hover:text-cyan-600"
                  >
                    {interest}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ================= ACADEMIC JOURNEY ================= */}
        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Academic Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Education & Research
          </h2>


          <div className="mt-10 space-y-8">


            {/* MASTER'S */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-cyan-400 hover:shadow-md">

              <div className="flex flex-col justify-between gap-3 sm:flex-row">

                <div>

                  <h3 className="text-xl font-bold">
                    Master of Engineering
                  </h3>

                  <p className="mt-1 font-medium text-cyan-600">
                    Agricultural Mechanization Engineering
                  </p>

                  <p className="mt-2 text-gray-600">
                    Nanjing Agricultural University, China
                  </p>

                </div>

                <span className="text-sm font-medium text-gray-500">
                  2024 – 2027
                </span>

              </div>

              <p className="mt-4 leading-7 text-gray-600">
                Research focused on biomass-derived biochar materials,
                electrochemical sensing, environmental pollutant
                detection, material characterization, and
                computational analysis.
              </p>

            </div>


            {/* BACHELOR'S */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-cyan-400 hover:shadow-md">

              <div className="flex flex-col justify-between gap-3 sm:flex-row">

                <div>

                  <h3 className="text-xl font-bold">
                    Bachelor of Agricultural Engineering
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Tribhuvan University, Nepal
                  </p>

                </div>

                <span className="text-sm font-medium text-gray-500">
                  2017 – 2022
                </span>

              </div>

              <p className="mt-4 leading-7 text-gray-600">
                Academic foundation in agricultural engineering,
                mechanization, renewable energy, environmental systems,
                and engineering applications in agriculture.
              </p>

            </div>

          </div>

        </section>


        {/* ================= RESEARCH PHILOSOPHY ================= */}
        <section className="mt-24 rounded-3xl bg-slate-950 p-8 text-white sm:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Research Philosophy
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Turning Waste into Value
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-300">
            I believe that sustainable engineering should not only
            solve technical problems but also create practical value
            from resources that are often overlooked. My research
            therefore explores how biomass waste can be transformed
            into functional materials and integrated into affordable
            sensing technologies that can contribute to environmental
            protection and sustainable development.
          </p>

        </section>

      </div>

    </main>
  )
}