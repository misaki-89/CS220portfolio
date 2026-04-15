export default function AboutImage() {
  return (
    <div
      className="
        w-full
        max-w-md
        aspect-square
        overflow-hidden
        mx-auto md:mx-0
      "
    >
      <Image src="/penguin2.jpg" alt="Profile" className="w-full h-full object-cover" />
    </div>
  );
}
