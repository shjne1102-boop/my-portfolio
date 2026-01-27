import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            (c) {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {site.socials.map((s) => (
              <a
                key={s.label}
                className="hover:text-slate-200 transition"
                href={s.href}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
