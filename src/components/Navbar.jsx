import { useEffect, useState } from "react";
import { nav, site } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-semibold tracking-tight text-slate-100"
          >
            {site.brand}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 hover:bg-slate-900 transition"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute inset-x-0 top-0 border-b border-slate-900/60 bg-slate-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <span className="font-semibold text-slate-100">
                  {site.brand}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 hover:bg-slate-900 transition"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <div className="pt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex flex-col">
                  {nav.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-slate-200 hover:bg-slate-900 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
