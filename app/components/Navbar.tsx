"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Blog", href: "#blog" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        
        {/* ================= LOGO / NAME ================= */}

        <a
          href="#home"
          className="shrink-0 leading-tight"
          onClick={() => setActiveSection("home")}
        >
          <span className="block text-lg font-bold tracking-tight text-gray-900">
            Dilli Ram Acharya
          </span>

          <span className="block text-xs font-medium text-gray-500">
            M.Eng. Researcher
          </span>
        </a>

        {/* ================= NAVIGATION ================= */}

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 text-cyan-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-cyan-600"
                }`}
              >
                {item.name}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div className="flex items-center lg:hidden">
          <select
            value={activeSection}
            onChange={(e) => {
              const section = e.target.value;
              setActiveSection(section);

              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none focus:border-cyan-400"
          >
            {navItems.map((item) => (
              <option
                key={item.name}
                value={item.href.replace("#", "")}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}