const skills = [
  "RAG",
  "LLMs",
  "GPT-4o",
  "TypeScript",
  "Python",
  "Qdrant",
  "LangChain",
  "MCP",
  "Node.js",
  "Next.js",
  "Embeddings",
  "Function Calling",
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-8">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-14">
          <div className="space-y-5">
            <p className="font-serif text-lg md:text-xl leading-relaxed">
              <span className="font-disp float-left text-6xl leading-[0.7] pr-3 pt-1 font-medium">
                I
              </span>
              &apos;m a software engineer with a full-stack JavaScript
              background who moved into AI engineering by building — RAG
              pipelines, vector databases, agents, fine-tuned models, and data
              pipelines, all shipped to production.
            </p>
            <p className="font-serif text-base md:text-lg leading-relaxed text-body">
              Over the past six months I&apos;ve shipped two products: a
              personal finance platform that tracks your money across multiple
              Nigerian banks — parses your statements, categorizes every
              transaction, and shows you where it&apos;s actually going. And a
              football analytics platform that breaks down what players actually
              do on the pitch — not just good or bad, but profiles and
              functions, so you can see how a striker who scores 25 goals from
              three square metres is fundamentally different from one who drops
              deep and creates for everyone else.
            </p>
            <p className="font-serif text-base md:text-lg leading-relaxed text-body">
              I&apos;m looking for remote AI engineering roles where I can keep
              building things that work.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted border-b border-rule pb-2 mb-4">
              Tools of the trade
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill) => (
                <span key={skill} className="font-mono text-xs text-body">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
