"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
    { title: "Security", url: "/security" }
  ];

  return (
    <div className="flex items-center gap-10">
      {links.map((link) => {
        const isActive = pathname === link.url;

        return (
          <div key={link.url} className="relative">
            <a
              href={link.url}
              className={`
                text-base transition
                ${
                  isActive
                    ? "text-[color:var(--accent)] font-semibold"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                }
              `}
            >
              {link.title}
            </a>

            {isActive && (
              <span className="absolute left-0 right-0 -bottom-[14px] h-[2px] bg-[color:var(--accent)] rounded-full" />
            )}
          </div>
        );
      })}
    </div>
  );
}
