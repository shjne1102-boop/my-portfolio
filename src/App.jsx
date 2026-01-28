import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Background giống Figma */}
      <div className="fixed inset-0 -z-10 bg-[#070A16]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(900px_500px_at_70%_20%,rgba(234,179,8,0.08),transparent_60%),radial-gradient(900px_700px_at_40%_80%,rgba(255,0,80,0.10),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  );
}
