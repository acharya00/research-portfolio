'use client'

import { motion } from 'framer-motion'

const Blog = () => {
  const posts = [
    { title: 'Lab notes: biochar synthesis', description: 'Weekly update · 2025' },
    { title: 'Conference summary: ISE 2025', description: 'Scientific writing' },
    { title: 'Learning notes: DFT basics', description: 'Gaussian tutorial' },
    { title: 'Life in China: first semester', description: 'Culture & experience' }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Blog · Research Journal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-gray-800 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog