import Container from "../components/Container";

export default function Footer() {
  return (
    <footer id="contacts" className="pt-10 pb-16">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/5 pt-10">
          <div>
            <div className="font-semibold">
              <span className="text-orange-400">Adrian</span>
              <span className="text-white">Vu.</span>
            </div>
            <p className="mt-2 text-xs text-white/45 max-w-xs">
              Designing beautiful and usable interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/50 text-sm">
            <a
              href="https://www.linkedin.com"
              className="hover:text-white"
              aria-label="LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-white"
              aria-label="Instagram"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.25 7.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
            <a
              href="https://www.behance.net"
              className="hover:text-white"
              aria-label="Behance"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M4 7h5.6a3.4 3.4 0 0 1 3.7 3.32 2.9 2.9 0 0 1-1.85 2.8A3.3 3.3 0 0 1 14 16.4 3.6 3.6 0 0 1 10.2 20H4V7zm5.5 5.1H6.7v-3H9.5a1.5 1.5 0 0 1 0 3zm.3 5.1H6.7v-3.2h3.1a1.6 1.6 0 0 1 0 3.2zM15.6 8.6h4.8v1.4h-4.8V8.6zm2.3 2a4 4 0 0 1 4.1 4.4H15a2.3 2.3 0 0 0 2.4 2 2.8 2.8 0 0 0 2.3-1.1l1.9.9A4.8 4.8 0 0 1 17.3 19a4.2 4.2 0 0 1-4.4-4.3 4.1 4.1 0 0 1 4-4.1zm0 1.8a2.1 2.1 0 0 0-2.2 1.8h4.2a2 2 0 0 0-2-1.8z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              className="hover:text-white"
              aria-label="GitHub"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.2-3.36-1.2-.45-1.12-1.1-1.42-1.1-1.42-.9-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.84.1-.65.35-1.1.63-1.35-2.22-.26-4.56-1.1-4.56-4.92 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.65-4.58 4.9.36.32.68.93.68 1.87v2.77c0 .27.18.59.69.48A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
