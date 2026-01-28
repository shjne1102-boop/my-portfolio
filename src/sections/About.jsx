import Container from "../components/Container";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="relative aspect-square">
              <img
                src="/profile.jpg"
                alt="About"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">
              About me:
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55 max-w-md leading-relaxed">
              I'm a UI/UX designer and front-end developer passionate about
              building beautiful and usable products.
            </p>

            <a
              href="#contacts"
              className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                         border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
