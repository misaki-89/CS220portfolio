"use client";

import { useState, useEffect } from "react";
import Nav from "./Nav";
import ModeChange from "./ModeChange";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full px-6 md:px-10 mt-6 relative">
      <div className="flex w-full items-center justify-end md:hidden gap-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            px-4 py-2 rounded-full
            bg-[color:var(--nav-bg)]
            border border-[color:var(--border-subtle)]
            text-sm
          "
        >
          Menu
          <span className="text-[10px]">▼</span>
        </button>

        <div
          className="
            w-10 h-10 flex items-center justify-center rounded-full
            bg-[color:var(--nav-bg)]
            border border-[color:var(--border-subtle)]
          "
        >
          {mounted && <ModeChange theme={theme} toggleTheme={toggleTheme} />}
        </div>
      </div>

      {menuOpen && (
        <div
          className="
            absolute right-0 mt-3
            md:hidden
            w-40 p-4 rounded-xl
            bg-[color:var(--nav-bg)]
            border border-[color:var(--border-subtle)]
            flex flex-col gap-3 text-sm shadow-lg
          "
        >
          <a href="/" className="text-[color:var(--text-primary)]">
            Home
          </a>
          <a href="/about" className="text-[color:var(--text-primary)]">
            About
          </a>
          <a href="/projects" className="text-[color:var(--text-primary)]">
            Projects
          </a>
          <a href="/uses" className="text-[color:var(--text-primary)]">
            Uses
          </a>
          <a href="/security" className="text-[color:var(--text-primary)]">
      Security
    </a>
        </div>
      )}

      <div className="hidden md:flex items-center justify-between">
        <div className="flex-1" />

        <div
          className="
            px-12 py-3 rounded-full
            bg-[color:var(--nav-bg)]
            border border-[color:var(--border-subtle)]
            backdrop-blur-xl shadow-lg
          "
        >
          <Nav />
        </div>

        <div className="flex-1 flex justify-end">
          <div
            className="
              px-4 py-3 rounded-full
              bg-[color:var(--nav-bg)]
              border border-[color:var(--border-subtle)]
              backdrop-blur-xl shadow-lg
            "
          >
            {mounted && <ModeChange theme={theme} toggleTheme={toggleTheme} />}
          </div>
        </div>
      </div>
    </header>
  );
}
