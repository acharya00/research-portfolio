'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">📧 Email</p>
                  <p className="font-medium text-gray-900 text-lg">dilli.ram@njau.edu.cn</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">📍 Location</p>
                  <p className="font-medium text-gray-900 text-lg">Nanjing Agricultural University, China</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">🔬 Research</p>
                  <p className="font-medium text-gray-900 text-lg">Electrochemical Sensors & Biochar</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-gray-700 text-lg">Connect with me</h4>
                <div className="flex gap-3 flex-wrap">
                  <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-gray-700 font-medium shadow-sm hover:shadow-md">
                    💼 LinkedIn
                  </a>
                  <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-gray-700 font-medium shadow-sm hover:shadow-md">
                    🐙 GitHub
                  </a>
                  <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-gray-700 font-medium shadow-sm hover:shadow-md">
                    📊 ResearchGate
                  </a>
                  <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-gray-700 font-medium shadow-sm hover:shadow-md">
                    🎓 Google Scholar
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all duration-300 font-medium shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5"
                >
                  📄 Download CV
                </a>
              </div>
            </div>

            <form className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  placeholder="Research Collaboration"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white"
                  placeholder="Describe your query or opportunity here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition-all duration-300 font-medium shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact