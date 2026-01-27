import Section from "../components/Section";
import Chip from "../components/Chip";
import Card from "../components/Card";
import { highlights } from "../data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 text-slate-300 leading-relaxed">
          <p>
            I love turning Figma designs into clean, responsive interfaces with
            strong attention to spacing, typography, and details.
          </p>
          <p className="mt-4">
            My workflow is component-driven and focused on maintainable UI.
          </p>
        </div>

        <Card>
          <p className="text-sm text-slate-400">Highlights</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <Chip key={h}>{h}</Chip>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
