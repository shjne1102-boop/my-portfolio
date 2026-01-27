import Section from "../components/Section";
import Chip from "../components/Chip";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech I use">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
    </Section>
  );
}
