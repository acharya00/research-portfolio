"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "Dilli Ram Acharya",
    href: "https://www.linkedin.com/in/dilli-ram-acharya",
  },
  {
    label: "ResearchGate",
    value: "Dilli Ram Acharya",
    href: "https://www.researchgate.net/profile/Dilli-Acharya",
  },
  {
    label: "Google Scholar",
    value: "Dilli Ram Acharya",
    href: "https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am open to research collaboration, academic discussion,
            scientific exchange, and professional opportunities related
            to sustainable materials, electrochemical sensing,
            environmental monitoring, and computational research.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-10 lg:grid-cols-5">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">

              <h3 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                For research collaboration, academic communication,
                or professional inquiries, feel free to contact me
                through email or connect through my academic profiles.
              </p>

              {/* EMAIL */}

              <a
                href="mailto:dilliacharya63@gmail.com"
                className="mt-8 flex items-start gap-4 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-emerald-600 transition group-hover:border-emerald-300">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all font-medium text-gray-800 transition group-hover:text-emerald-600">
                    dilliacharya63@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-emerald-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-gray-800">
                    Nanjing, Jiangsu, China
                  </p>
                </div>
              </div>

              {/* PROFILE LINKS */}

              <div className="mt-8 space-y-3">

                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {link.label}
                      </p>

                      <p className="mt-1 font-medium text-gray-800">
                        {link.value}
                      </p>
                    </div>

                    <ExternalLink
                      size={17}
                      className="text-gray-400 transition group-hover:text-emerald-600"
                    />
                  </a>
                ))}

              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

              <h3 className="text-2xl font-bold text-gray-900">
                Send a Message
              </h3>

              <p className="mt-3 text-gray-600">
                Have a research idea, collaboration opportunity, or
                academic inquiry? I&apos;d be happy to hear from you.
              </p>

              <form
                action="mailto:dilliacharya63@gmail.com"
                method="post"
                encType="text/plain"
                className="mt-8 space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                </div>

                {/* SUBJECT */}

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    required
                    placeholder="Research collaboration"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}