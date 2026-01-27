import Section from "../components/Section";
import { site } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <p className="text-slate-300 leading-relaxed max-w-2xl">
          If you have a project in mind, send me an email. I reply fast.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-white transition text-center"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s|\(|\)|-/g, "")}`}
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 transition text-center"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
