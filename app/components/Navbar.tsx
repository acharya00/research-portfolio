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
  { name: "Media Journey", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) =>
      item.href.replace("#", "")
    );

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      setActiveSection(id);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* ================= NAME ================= */}

        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "#home")}
          className="shrink-0 leading-tight"
        >
          <span className="block text-lg font-bold tracking-tight text-gray-900">
            Dilli Ram Acharya
          </span>

          <span className="block text-xs font-medium text-gray-500">
            M.Eng. Researcher
          </span>
        </a>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden items-center gap-1 xl:flex">

          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) =>
                  handleNavigation(e, item.href)
                }
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gray-100 text-cyan-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-cyan-600"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-500" />
                )}
              </a>
            );
          })}

        </div>

        {/* ================= TABLET / MOBILE ================= */}

        <div className="xl:hidden">

          <select
            value={activeSection}
            onChange={(e) => {
              const id = e.target.value;
              const section = document.getElementById(id);

              if (section) {
                setActiveSection(id);

                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });

                window.history.pushState(
                  null,
                  "",
                  `#${id}`
                );
              }
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