import Section from "../components/Section";
import Card from "../components/Card";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people say">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <p className="text-slate-300 text-sm leading-relaxed">
              “{t.quote}”
            </p>
            <div className="mt-4">
              <p className="text-slate-100 font-medium text-sm">{t.name}</p>
              <p className="text-slate-400 text-xs">{t.title}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
