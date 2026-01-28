import Container from "../components/Container";

export default function Hero() {
  return (
    <section id="home" className="pt-10 lg:pt-14">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="pt-6">
            <h1 className="text-white font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              UI/UX Designer
              <br />& Front-end
              <br />
              Developer
            </h1>

            <div className="mt-6 h-0.5 w-14 bg-yellow-400/90 rounded-full" />

            <p className="mt-6 text-sm sm:text-base text-white/55 max-w-md leading-relaxed">
              I design clean, modern interfaces and build responsive websites.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium
                            bg-yellow-400 text-black shadow-sm hover:bg-yellow-300 transition"
              >
                View Projects
              </a>

              <a
                href="#contacts"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium
                           bg-yellow-400 text-black shadow-sm hover:bg-yellow-300 transition"
              >
                Contacts
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src="/hero.jpg"
                  alt="Portrait"
                  className="absolute inset-0 h-full w-full object-cover scale-125"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-white/5 border border-white/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
