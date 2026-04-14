import { Intro, SignUp, Articles, Work, Skills } from "../components/home";

export default function Home() {
  return (
    <main
      className="
        max-w-7xl mx-auto
        px-6 md:px-12 py-16
        space-y-24
        bg-[color:var(--bg-page)]
        text-[color:var(--text-primary)]
      "
    >
      <Intro />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <Articles />
        </div>

        <div className="space-y-10">
          <SignUp />
          <Work />
          <Skills className="mb-20" />
        </div>
      </section>
    </main>
  );
}
