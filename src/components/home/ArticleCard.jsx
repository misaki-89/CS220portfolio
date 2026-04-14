"use client";

export default function ArticleCard({ date, title, content, link = "#" }) {
  return (
    <article className="flex flex-col bg-transparent">
      <time
        className="
          text-sm uppercase
          text-[color:var(--text-muted)]
          border-l-4 border-[color:var(--divider)]
          pl-3
        "
      >
        {date}
      </time>

      {title && (
        <h3 className="mt-2 text-xl font-semibold text-[color:var(--text-primary)]">
          {title}
        </h3>
      )}

      <p className="my-4 leading-relaxed text-[color:var(--text-secondary)]">
        {content}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--accent)] font-semibold hover:underline"
      >
        Read article &gt;
      </a>
    </article>
  );
}
