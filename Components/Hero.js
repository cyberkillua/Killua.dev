import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top">
      {/* Dateline */}
      <div className="border-b border-ink">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          <span>Lagos, Nigeria</span>
          <span className="hidden sm:inline">Remote &amp; Available</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center pt-12 pb-10 md:pt-16 md:pb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-red mb-4">
          AI Application Engineer
        </p>
        <h1 className="font-disp font-semibold tracking-tight leading-[0.92] text-5xl sm:text-6xl md:text-7xl">
          Moshood Alimi
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mt-5">
          Builder &nbsp;·&nbsp; Writer &nbsp;·&nbsp; Shipping Production AI
        </p>
      </div>

      {/* Statement band */}
      <div className="border-y border-ink">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 md:py-20 text-center">
          <p className="font-disp font-medium text-2xl sm:text-3xl md:text-4xl leading-[1.12] tracking-tight max-w-2xl mx-auto mb-6">
            AI engineer. I build things that work.
          </p>
          <p className="font-serif text-base md:text-lg leading-relaxed text-body max-w-xl mx-auto">
            Full-stack background. Python and TypeScript. Currently shipping a
            finance platform and a football analytics engine from Lagos.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 justify-center font-mono text-[11px] uppercase tracking-[0.08em]">
            <a
              href="#work"
              className="text-red border-b-[1.5px] border-red pb-0.5 hover:opacity-70 transition-opacity"
            >
              View the work →
            </a>
            <a
              href="#contact"
              className="border-b-[1.5px] border-ink pb-0.5 hover:text-red hover:border-red transition-colors"
            >
              Get in touch →
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 justify-center text-muted">
            <a
              href="https://github.com/cyberkillua"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/moshood-alimi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://killy7.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] hover:text-red transition-colors"
            >
              Substack ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
