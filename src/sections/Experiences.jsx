import Section from "../components/Section";
import Card from "../components/Card";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="grid gap-4">
        {experiences.map((e) => (
          <Card key={e.role + e.company}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <p className="text-slate-100 font-medium">{e.role}</p>
                <p className="text-slate-400 text-sm">{e.company}</p>
              </div>
              <p className="text-slate-400 text-sm">{e.period}</p>
            </div>

            <ul className="mt-4 list-disc pl-5 text-slate-300 text-sm space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
