"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            I welcome opportunities for research collaboration, academic
            discussion, scientific exchange, and professional networking.
            Feel free to get in touch.
          </p>
        </motion.div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-12 lg:grid-cols-2">


          {/* ================= LEFT — CONTACT INFORMATION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg sm:p-10"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Get in Touch
            </p>

            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              Academic & Research Collaboration
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you are interested in research collaboration,
              electrochemical sensing, biomass-derived materials,
              environmental monitoring, or simply want to discuss
              scientific ideas, I would be happy to connect.
            </p>


            {/* ================= EMAIL ================= */}

            <div className="mt-10 border-t border-gray-200 pt-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Email
              </p>

              <a
                href="mailto:dilliacharya63@gmail.com"
                className="mt-2 block text-lg font-medium text-gray-800 transition hover:text-emerald-600"
              >
                dilliacharya63@gmail.com
              </a>

            </div>


            {/* ================= LOCATION ================= */}

            <div className="mt-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Current Location
              </p>

              <p className="mt-2 text-gray-700">
                Nanjing, Jiangsu, China
              </p>

            </div>


            {/* ================= UNIVERSITY ================= */}

            <div className="mt-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Institution
              </p>

              <p className="mt-2 text-gray-700">
                Nanjing Agricultural University
              </p>

            </div>


            {/* ================= RESEARCH ================= */}

            <div className="mt-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Research Focus
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                Biomass valorization · Biochar · Electrochemical sensing ·
                Environmental monitoring · DFT · Machine learning
              </p>

            </div>


            {/* ================= ACADEMIC LINKS ================= */}

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="https://www.linkedin.com/in/dilli-ram-acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
              >
                LinkedIn
              </a>

              <a
                href="https://www.researchgate.net/profile/Dilli-Acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
              >
                ResearchGate
              </a>

              <a
                href="https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en&authuser=3"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
              >
                Google Scholar
              </a>

            </div>

          </motion.div>


          {/* ================= RIGHT — MESSAGE FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg sm:p-10"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              MESSAGE
            </p>

            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              For research collaboration, academic inquiries, or
              professional opportunities, you can send me a message below.
            </p>


            {/* ================= FORM ================= */}

            <form
              action="mailto:dilliacharya63@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-6"
            >

              {/* NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white"
                />

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  required
                  placeholder="Research collaboration, inquiry, etc."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows={6}
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white"
                />

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>


        {/* ================= CLOSING ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >

          <p className="text-sm text-gray-500">
            Open to meaningful scientific conversations and research
            collaborations.
          </p>

        </motion.div>

      </div>
    </section>
  );
}