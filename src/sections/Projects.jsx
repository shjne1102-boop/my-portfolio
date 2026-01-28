import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Landing Page Redesign",
    desc: "Modern responsive design made in Figma.",
    cover: "/Projects/p1.jpg",
  },
  {
    title: "Landing Page Redesign",
    desc: "Modern responsive design made in Figma.",
    cover: "/Projects/p2.jpg",
  },
  {
    title: "Landing Page Redesign",
    desc: "Modern responsive design made in Figma.",
    cover: "/Projects/p3.jpg",
  },
];

export default function Projects() {
  return (
    <section className="pt-16" id="projects">
      <Container>
        <SectionTitle
          title="Feature Projects"
          desc="Some of the projects I've designed and built recently."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
