"use client";

export default function Skills() {
  const title = "Skills";
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.";

  const skills = [
    { icon: "/html5.png", name: "HTML", proficiency: 40 },
    { icon: "/css3.png", name: "CSS", proficiency: 40 },
    { icon: "/javascript.png", name: "JavaScript", proficiency: 40 },
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>

        <h2 className="text-xl font-semibold text-[color:var(--text-primary)] m-0">{title}</h2>
      </div>

      <p className="text-[color:var(--text-secondary)]">{content}</p>

      <ul className="flex flex-col gap-6">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex items-center gap-4">
              <Image src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12 rounded-full" />

              <div className="flex flex-col flex-grow gap-2">
                <h3 className="text-sm font-medium text-[color:var(--text-primary)] m-0">{skill.name}</h3>

                <div
                  className="
                    h-2 rounded-full overflow-hidden
                    bg-[color:var(--page-bg)]
                    border border-[color:var(--border-subtle)]
                  "
                >
                  <div
                    className="
                      h-full transition-all duration-300
                      bg-[color:var(--accent)]
                    "
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
