export default function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 shadow-sm">
      {children}
    </div>
  );
}
