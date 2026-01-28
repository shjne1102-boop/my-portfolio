import Container from "./Container";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contacts" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-transparent border-b border-white/5">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            <span className="text-orange-400">Adrian</span>
            <span className="text-white">Vu.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {nav.map((x) => (
              <a
                key={x.id}
                href={`#${x.id}`}
                className="hover:text-white transition"
              >
                {x.label}
              </a>
            ))}
          </nav>

          <button className="hidden md:inline-flex items-center gap-2 text-xs bg-white text-black border border-white rounded-md px-3 py-2 hover:bg-white/90 transition">
            EN <span className="opacity-60">&#9662;</span>
          </button>

          <a
            href="#contacts"
            className="md:hidden text-xs text-white/80 border border-white/10 rounded-md px-3 py-2"
          >
            Menu
          </a>
        </div>
      </Container>
    </header>
  );
}
