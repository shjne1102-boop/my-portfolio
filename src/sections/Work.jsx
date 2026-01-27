import Section from "../components/Section";
import Card from "../components/Card";
import Chip from "../components/Chip";
import { projects } from "../data/content";

export default function Work() {
  return (
    <Section id="work" eyebrow="Work" title="Selected projects">
      <div className="grid gap-4">
        {projects.map((p) => (
          <Card key={p.name}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="text-slate-100 font-medium">{p.name}</p>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed max-w-2xl">
                  {p.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <a
                  href={p.links.live}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-900 transition"
                >
                  Live
                </a>
                <a
                  href={p.links.repo}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-900 transition"
                >
                  Repo
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
