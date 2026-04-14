import ProjectsIntro from "@/components/Projects/ProjectsIntro";
import ProjectsCompany from "@/components/Projects/ProjectsCompany";

export default function Projects() {
  return (
    <main
      className="
        max-w-7xl mx-auto
        px-6 md:px-12 pt-16
        text-[color:var(--text-primary)]
      "
    >
      <section>
        <ProjectsIntro />
      </section>

      <section className="mt-12 md:mt-20 mb-20">
        <ProjectsCompany />
      </section>
    </main>
  );
}
