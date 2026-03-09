import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[#666] mb-5 tracking-wide">
          Based in Lagos, Nigeria
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
          Moshood
          <br />
          Alimi
        </h1>

        <div className="inline-block border-2 border-[#0A0A0A] bg-[#FACC15] px-3 py-1 font-mono text-sm font-semibold shadow-[3px_3px_0_#0A0A0A] mb-8">
          AI Application Engineer
        </div>

        <p className="text-xl md:text-2xl font-semibold mb-4 leading-tight">
          I build production AI systems that solve real problems.
        </p>

        <p className="text-base md:text-lg text-[#555] mb-10 leading-relaxed">
          I work at the intersection of software engineering and AI — building RAG
          systems, agents, and LLM-powered products that ship.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#projects"
            className="border-2 border-[#0A0A0A] bg-[#FACC15] px-6 py-2.5 font-bold text-sm shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-px hover:-translate-y-px transition-all"
          >
            View Projects
          </a>
          <a
            href="#writing"
            className="border-2 border-[#0A0A0A] bg-white px-6 py-2.5 font-bold text-sm shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-px hover:-translate-y-px transition-all"
          >
            Read my writing
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/cyberkillua"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/moshood-alimi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://substack.com/@moshoodalimi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border-b-2 border-[#0A0A0A] hover:text-[#FACC15] hover:border-[#FACC15] transition-colors pb-0.5"
          >
            Substack ↗
          </a>
        </div>
      </div>
    </section>
  );
}
