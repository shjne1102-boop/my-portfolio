import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skill";
import Experience from "./sections/Experiences";
import Work from "./sections/Work";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
