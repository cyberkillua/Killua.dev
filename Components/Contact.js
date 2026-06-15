import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-y border-ink">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-6">
          Contact
        </p>

        <h2 className="font-disp text-3xl md:text-5xl font-medium tracking-tight mb-5">
          Let&apos;s work together.
        </h2>

        <p className="font-serif text-base md:text-lg text-body max-w-lg mx-auto mb-9 leading-relaxed">
          I&apos;m open to remote AI engineering roles and freelance projects.
          The best way to reach me is email.
        </p>

        <a
          href="mailto:moshood988@gmail.com"
          className="inline-block font-disp text-xl md:text-2xl border-b-2 border-ink pb-1 hover:text-red hover:border-red transition-colors mb-10"
        >
          moshood988@gmail.com
        </a>

        <div className="flex flex-wrap gap-7 items-center justify-center font-mono text-[11px] uppercase tracking-[0.08em]">
          <a
            href="https://github.com/cyberkillua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-red transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/moshood-alimi-413869199/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-red transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://killy7.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-red transition-colors"
          >
            Substack ↗
          </a>
        </div>
      </div>
    </section>
  );
}
