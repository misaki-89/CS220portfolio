export default function AboutSNS() {
  return (
    <ul className="space-y-6 text-sm text-[color:var(--text-secondary)]">
      <li>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-[color:var(--text-primary)] transition-colors"
        >
          {/* X icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2H21.5l-7.59 8.66L22 22h-6.953l-4.36-5.74L5.5 22H2.244l8.18-9.32L2 2h7.047l3.953 5.24L18.244 2z" />
          </svg>
          <span>Follow me on X</span>
        </a>
      </li>

      <li>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-[color:var(--text-primary)] transition-colors"
        >
          {/* GitHub icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12
              0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.726-4.033-1.416-4.033-1.416
              -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729
              1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997
              .108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.93
              0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176
              0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404
              c1.018.005 2.045.138 3.003.404
              2.291-1.552 3.297-1.23 3.297-1.23
              .655 1.652.243 2.873.12 3.176
              .77.84 1.235 1.911 1.235 3.221
              0 4.609-2.807 5.624-5.479 5.921
              .43.372.824 1.102.824 2.222
              0 1.606-.014 2.898-.014 3.293
              0 .321.216.694.827.576
              C20.565 22.092 24 17.592 24 12.297
              c0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span>Follow me on GitHub</span>
        </a>
      </li>

      <li>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-[color:var(--text-primary)] transition-colors"
        >
          {/* LinkedIn icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569
              c0-1.328-.027-3.037-1.852-3.037
              -1.853 0-2.136 1.445-2.136 2.939
              v5.667H9.351V9h3.414v1.561h.049
              c.476-.9 1.637-1.852 3.368-1.852
              3.6 0 4.266 2.37 4.266 5.455
              v6.288zM5.337 7.433a2.062 2.062
              0 1 1 0-4.124 2.062 2.062 0 0 1
              0 4.124zM6.814 20.452H3.861V9
              h2.953v11.452z"
            />
          </svg>
          <span>Follow me on LinkedIn</span>
        </a>
      </li>

      <li className="pt-4 border-t border-[color:var(--border-subtle)] max-w-[200px]">
        <div className="flex items-center gap-3">
          {/* Mail icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v16H4z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          <span>jane@email.com</span>
        </div>
      </li>
    </ul>
  );
}
