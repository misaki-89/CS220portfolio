export default function Intro() {
  return (
    <section className="flex flex-col items-start text-left gap-10">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src="/penguin.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-4xl flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter leading-[1.1] text-[color:var(--text-primary)]">
          Software engineer, father, and believer
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--text-secondary)]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
        </p>

        <div className="flex gap-6 text-[color:var(--text-muted)]">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z" />
            </svg>
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2H21.5l-7.59 8.66L22 22h-6.953l-4.36-5.74L5.5 22H2.244l8.18-9.32L2 2h7.047l3.953 5.24L18.244 2z" />
            </svg>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
