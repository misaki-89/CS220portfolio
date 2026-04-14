import AboutIntro from "@/components/about/AboutIntro";
import AboutImage from "@/components/about/AboutImage";
import AboutSNS from "@/components/about/AboutSNS";

export default function About() {
  return (
    <main
      className="
        max-w-7xl mx-auto
        px-6 md:px-12 pt-16
        text-[color:var(--text-primary)]
      "
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-0">
        <div className="order-1 md:order-2 md:col-start-2">
          <AboutImage />
        </div>

        <div className="order-2 md:order-1 md:col-start-1 md:row-start-1 md:row-span-2 ">
          <AboutIntro />
        </div>

        <div className="order-3 md:order-3 md:col-start-2 mt-12 md:mt-4 mb-40">
          <AboutSNS />
        </div>
      </section>
    </main>
  );
}
