export default function UsesCard({ title, description }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-bold text-[color:var(--text-primary)]">{title}</h3>
      <p className="text-[color:var(--text-secondary)]">{description}</p>
    </div>
  );
}
