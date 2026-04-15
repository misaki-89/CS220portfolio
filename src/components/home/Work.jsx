"use client";

export default function Work() {
  const title = "Work";
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.";

  const experiences = [
    {
      logo: "/slack.png",
      organization: "Slack",
      jobTitle: "SOFTWARE ENGINEER",
      startYear: 2016,
      endYear: "Present",
    },
    {
      logo: "/spotify.png",
      organization: "Spotify",
      jobTitle: "SOFTWARE ENGINEER",
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: "/audible.png",
      organization: "Audible",
      jobTitle: "SOFTWARE ENGINEER",
      startYear: 2012,
      endYear: 2013,
    },
    {
      logo: "/microsoft.png",
      organization: "Microsoft",
      jobTitle: "SOFTWARE ENGINEER",
      startYear: 2010,
      endYear: 2011,
    },
  ];

  return (
    <section
      className="
        w-full max-w-md p-6 rounded-2xl space-y-6
        bg-[color:var(--card-bg)]
        border border-[color:var(--border-subtle)]
      "
    >
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[color:var(--text-secondary)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V6a3 3 0 0 1 6 0v.75M3.75 9h16.5M4.5 9v9.75A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V9"
          />
        </svg>

        <h2 className="text-xl font-semibold text-[color:var(--text-primary)] m-0">{title}</h2>
      </div>

      <p className="text-[color:var(--text-secondary)]">{content}</p>

      <ul className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <li key={index} className="flex items-start gap-4">
            <Image src={exp.logo} alt={`${exp.organization} Logo`} className="w-12 h-12 rounded-full" />

            <div className="flex flex-col w-full gap-1">
              <h3 className="text-base font-medium text-[color:var(--text-primary)]">{exp.organization}</h3>

              <div className="flex justify-between items-center">
                <p className="text-xs uppercase tracking-wide text-[color:var(--text-secondary)]">{exp.jobTitle}</p>

                <span className="text-xs uppercase tracking-wide text-[color:var(--text-secondary)]">
                  {exp.startYear} – {exp.endYear}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
