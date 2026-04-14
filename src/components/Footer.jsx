"use client";

export default function Footer({ links = [] }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        w-full py-6
        border-t border-[color:var(--border-subtle)]
      "
    >
      <div
        className="
        w-full
        flex flex-col items-center gap-4
        md:flex-row md:justify-between md:px-10
      "
      >
        <nav className="flex gap-6 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="
                text-[color:var(--text-secondary)]
                hover:text-[color:var(--text-primary)]
                transition-colors
              "
            >
              {link.title}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[color:var(--text-muted)] text-center md:text-left">
          © {year} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
