const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              Dilli Ram Acharya
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agricultural & Biosystems Engineer<br />
              Nanjing Agricultural University
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">About</a>
              <a href="#research" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Research</a>
              <a href="#publications" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Publications</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Projects</a>
              <a href="#blog" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Blog</a>
              <a href="#travel" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Travel</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">💼 LinkedIn</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">🐙 GitHub</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">📊 ResearchGate</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">🎓 Google Scholar</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">🆔 ORCID</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Location</h4>
            <p className="text-gray-400">📍 Nanjing, China</p>
            <p className="text-gray-400 text-sm mt-2">📧 dilli.ram@njau.edu.cn</p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer