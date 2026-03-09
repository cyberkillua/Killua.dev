import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t-2 border-[#0A0A0A]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s work together
      </h2>

      <p className="text-base md:text-lg text-[#444] mb-8 max-w-lg leading-relaxed">
        I&apos;m open to remote AI engineering roles and freelance projects.
        Best way to reach me is email.
      </p>

      <a
        href="mailto:moshood988@gmail.com"
        className="inline-block border-2 border-[#0A0A0A] bg-[#FACC15] px-6 py-3 font-bold text-sm shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-px hover:-translate-y-px transition-all mb-10 font-mono"
      >
        moshood988@gmail.com
      </a>

      <div className="flex flex-wrap gap-5 items-center">
        <a
          href="https://github.com/cyberkillua"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold hover:text-[#FACC15] transition-colors"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/moshood-alimi-413869199/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold hover:text-[#FACC15] transition-colors"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://killy7.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold hover:text-[#FACC15] transition-colors"
        >
          Substack ↗
        </a>
      </div>
    </section>
  );
}
