'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Travel', href: '#travel' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      )

      sections.forEach((section, index) => {
        if (!section) return

        const top = (section as HTMLElement).offsetTop - 120
        const height = (section as HTMLElement).offsetHeight

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(navItems[index].href)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="group">

            <div className="flex flex-col">

              <span className="text-2xl font-black tracking-widest text-cyan-400">
                DRA
              </span>

              <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Research Portfolio
              </span>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-7">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300

                ${
                  activeSection === item.href
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                ${
                  activeSection === item.href
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }
                `}
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* CV Button */}

          <div className="hidden lg:flex items-center gap-4">

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-400"
            >
              <Download size={16} />
              Download CV
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20">

          <div className="flex flex-col px-6 py-5 space-y-5">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 py-3 font-semibold text-slate-900"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

        </div>

      )}
    </header>
  )
}
