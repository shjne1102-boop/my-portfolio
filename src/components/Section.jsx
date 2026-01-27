export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <header className="mb-8 sm:mb-10">
            {eyebrow && (
              <p className="text-sm font-medium tracking-wide text-slate-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
