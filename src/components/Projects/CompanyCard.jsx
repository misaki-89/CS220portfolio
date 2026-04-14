export default function CompanyCard({ name, description, url }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white font-bold text-sm">
          H
        </div>
        <h3 className="text-base font-semibold">{name}</h3>
      </div>

      <p className="max-w-[260px] text-sm leading-snug text-[color:var(--text-secondary)]">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition"
      >
        🔗 {url}
      </a>
    </div>
  );
}
