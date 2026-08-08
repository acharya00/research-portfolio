"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Publications", id: "publications" },
  { name: "Research", id: "research" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Blog", id: "blog" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 82;
      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">

        {/* BRAND */}

        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "home")}
          className="shrink-0"
        >
          <div className="text-lg font-bold tracking-tight text-gray-900">
            Dilli Ram Acharya
          </div>

          <div className="mt-0.5 text-xs font-medium tracking-wide text-gray-500">
            M.Eng. Researcher
          </div>
        </a>

        {/* NAVIGATION */}

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) =>
                  handleNavigation(e, item.id)
                }
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-500" />
                )}
              </a>
            );
          })}
        </nav>

      </div>
    </header>
  );
}