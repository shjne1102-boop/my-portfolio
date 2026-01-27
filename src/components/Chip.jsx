export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-800/50 px-3 py-1 text-sm text-slate-200">
      {children}
    </span>
  );
}
