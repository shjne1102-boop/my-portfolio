export default function ProjectCard({ cover, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1030]/40 overflow-hidden">
      <div className="p-4">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
          <img src={cover} alt="" className="w-full h-28 object-cover" />
        </div>

        <h3 className="mt-4 text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/55 leading-relaxed">{desc}</p>

        <a
          href="#projects"
          className="mt-4 inline-flex text-sm text-white/70 hover:text-white transition"
        >
          View Projects →
        </a>
      </div>
    </div>
  );
}
