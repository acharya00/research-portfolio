"use client";

import {
  Linkedin,
  Github,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* IDENTITY */}

          <div>
            <h3 className="text-2xl font-bold text-white">
              Dilli Ram Acharya
            </h3>

            <p className="mt-3 max-w-sm leading-7 text-gray-400">
              Agricultural & Biosystems Engineer and researcher working
              on biomass valorization, biochar, electrochemical sensing,
              environmental monitoring, DFT, and machine learning.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <h4 className="font-semibold text-white">
              Explore
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm">

              <a href="#home" className="hover:text-emerald-400">
                Home
              </a>

              <a href="#about" className="hover:text-emerald-400">
                About
              </a>

              <a href="#research" className="hover:text-emerald-400">
                Research
              </a>

              <a href="#projects" className="hover:text-emerald-400">
                Projects
              </a>

              <a href="#publications" className="hover:text-emerald-400">
                Publications
              </a>

              <a href="#education" className="hover:text-emerald-400">
                Education
              </a>

              <a href="#experience" className="hover:text-emerald-400">
                Experience
              </a>

              <a href="#skills" className="hover:text-emerald-400">
                Skills
              </a>

              <a href="#blog" className="hover:text-emerald-400">
                Blog
              </a>

              <a href="#contact" className="hover:text-emerald-400">
                Contact
              </a>

            </div>
          </div>

          {/* CONNECT */}

          <div>
            <h4 className="font-semibold text-white">
              Connect
            </h4>

            <div className="mt-4 space-y-3">

              <a
                href="mailto:dilliacharya63@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-emerald-400"
              >
                <Mail size={17} />
                dilliacharya63@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/dilli-ram-acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-emerald-400"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href="https://github.com/acharya00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-emerald-400"
              >
                <Github size={17} />
                GitHub
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-gray-800 pt-7 sm:flex-row sm:items-center">

          <p className="text-sm text-gray-500">
            © {currentYear} Dilli Ram Acharya. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-emerald-400"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
}