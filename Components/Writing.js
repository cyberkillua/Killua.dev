const articles = [
  {
    title: "My First AI Engineering Mock Interview",
    platform: "LinkedIn",
    description:
      "A reflection on preparing for AI engineering roles and what the process revealed about the field.",
    href: "https://www.linkedin.com/pulse/my-first-ai-engineering-mock-interview-moshood-alimi-dq5pf/?trackingId=BnQZfy2qQIKGiZYk9%2BCicw%3D%3D",
  },
  {
    title:
      "I Learned Transformers by Arguing With an AI. Here's the Transcript.",
    platform: "Substack",
    description:
      "A conversation between Claude and me, learning how attention mechanisms work, step by step.",
    href: "https://killy7.substack.com/p/i-learned-transformers-by-arguing",
  },
  {
    title: "Evaluation Metrics for LLMs and RAG Systems",
    platform: "LinkedIn",
    description: "Why evaluation is hard — and how to think about it.",
    href: "https://www.linkedin.com/pulse/evaluation-metrics-llms-rag-systems-moshood-alimi-1ukff/",
  },
  {
    title: "Most 'AI Engineers' Can't Answer These Basic Questions",
    platform: "Substack",
    description:
      "A Q&A between Claude and me, gauging my understanding of Chip Huyen's AI Engineering.",
    href: "https://killy7.substack.com/p/ai-engineering-fundamentals-a-first",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="border-t border-ink">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            From the Desk
          </h2>
          <a
            href="https://killy7.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-red border-b-[1.5px] border-red pb-0.5 hover:opacity-70 transition-opacity"
          >
            All writing →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          {articles.map((article) => (
            <article key={article.title} className="py-6 border-t border-rule">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-2">
                {article.platform}
              </p>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-disp text-lg md:text-xl font-medium leading-snug block mb-2 hover:text-red transition-colors"
              >
                {article.title}
              </a>
              <p className="font-serif text-[15px] leading-relaxed text-body">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
