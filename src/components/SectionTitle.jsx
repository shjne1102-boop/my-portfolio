export default function SectionTitle({ title, desc }) {
  return (
    <div className="mb-6">
      <h2 className="text-white text-xl sm:text-2xl font-semibold">{title}</h2>
      {desc && <p className="mt-2 text-sm text-white/50 max-w-lg">{desc}</p>}
    </div>
  );
}
