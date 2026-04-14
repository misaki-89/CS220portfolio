import { UsesIntro, UsesSection } from "@/components/Uses";

export default function UsesPage() {
  return (
    <main
      className="
        max-w-7xl mx-auto
        px-6 md:px-12 pt-16 pb-8
        text-[color:var(--text-primary)]
      "
    >
      <section>
        <UsesIntro />
      </section>

      <section className="mt-12 md:mt-20 mb-20">
        <UsesSection />
      </section>
    </main>
  );
}
