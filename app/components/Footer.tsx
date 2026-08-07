"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= IDENTITY ================= */}

          <div>
            <h3 className="text-2xl font-bold">
              Dilli Ram Acharya
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Agricultural & Biosystems Engineer
              <br />
              M.Eng. Researcher
              <br />
              Nanjing Agricultural University, China
            </p>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Researching biomass valorization, biochar engineering,
              electrochemical sensing, environmental monitoring,
              computational analysis, and sustainable materials.
            </p>
          </div>


          {/* ================= EXPLORE ================= */}

          <div>
            <h4 className="font-semibold text-white">
              Explore
            </h4>

            <div className="mt-5 space-y-3 text-sm text-gray-400">

              <a
                href="#home"
                className="block transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="block transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#research"
                className="block transition hover:text-cyan-400"
              >
                Research
              </a>

              <a
                href="#publications"
                className="block transition hover:text-cyan-400"
              >
                Publications
              </a>

              <a
                href="#education"
                className="block transition hover:text-cyan-400"
              >
                Education
              </a>

              <a
                href="#experience"
                className="block transition hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#media"
                className="block transition hover:text-cyan-400"
              >
                Media Journey
              </a>

              <a
                href="#contact"
                className="block transition hover:text-cyan-400"
              >
                Contact
              </a>

            </div>
          </div>


          {/* ================= PROFESSIONAL ================= */}

          <div>
            <h4 className="font-semibold text-white">
              Professional
            </h4>

            <div className="mt-5 space-y-3 text-sm text-gray-400">

              <a
                href="https://www.linkedin.com/in/dilli-ram-acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/acharya00"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://orcid.org/0009-0007-1035-5461"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-cyan-400"
              >
                ORCID
              </a>

              <a
                href="mailto:dilliacharya63@gmail.com"
                className="block transition hover:text-cyan-400"
              >
                Email
              </a>

            </div>
          </div>


          {/* ================= MEDIA ================= */}

          <div>
            <h4 className="font-semibold text-white">
              Media
            </h4>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Follow my academic, creative, travel, and personal journey
              beyond the laboratory.
            </p>

            <div className="mt-5 space-y-3 text-sm text-gray-400">

              {/* YOUTUBE */}

              <a
                href="https://www.youtube.com/@learnwithdilli79"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-red-400"
              >
                YouTube
              </a>


              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/dillivlogs2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-400"
              >
                Facebook
              </a>


              {/* DILLI VLOGS */}

              <a
                href="https://www.youtube.com/@dillivlogs_2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-cyan-400"
              >
                Dilli Vlogs
              </a>


              {/* MEDIA JOURNEY */}

              <a
                href="#media"
                className="block transition hover:text-cyan-400"
              >
                Media Journey
              </a>

            </div>
          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}

        <div className="mt-14 border-t border-slate-800 pt-8 text-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dilli Ram Acharya. All rights
            reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}