import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import SkillPill from "../components/SkillPill";

const skills = [
  { label: "HTML", icon: "/icons/Html.svg" },
  { label: "CSS", icon: "/icons/css.svg" },
  { label: "Github", icon: "/icons/github.svg" },
  { label: "C/C++", icon: "/icons/C.svg" },
  { label: "JS", icon: "/icons/Js.svg" },
  { label: "Figma", icon: "/icons/Figma.svg" },
];

export default function Skills() {
  return (
    <section className="pt-16" id="skills">
      <Container>
        <SectionTitle
          title="Skills"
          desc="Technologies and tools I use to build modern interfaces."
        />

        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <SkillPill key={s.label} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
