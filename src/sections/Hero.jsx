import { site } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="pt-12 sm:pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-3 py-1 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new projects
            </p>

            <h1 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-100">
              {site.role} {site.tagline}
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              {site.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-white transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-slate-400">Location</p>
                <p className="mt-1 font-medium text-slate-100">
                  {site.location}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-slate-400">Focus</p>
                <p className="mt-1 font-medium text-slate-100">{site.focus}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-slate-400">Status</p>
                <p className="mt-1 font-medium text-slate-100">{site.status}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/src/avatxam.jpg"
              alt={`${site.name} profile`}
              className="h-64 w-64 sm:h-80 sm:w-80 rounded-3xl object-cover border border-slate-800 shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
