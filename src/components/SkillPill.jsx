export default function SkillPill({ icon, label }) {
  return (
    <div className="w-[74px] h-[74px] rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2">
      <img src={icon} alt="" className="h-6 w-6" />
      <span className="text-[11px] text-white/70">{label}</span>
    </div>
  );
}
