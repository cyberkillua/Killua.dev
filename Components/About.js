const skills = [
  'RAG',
  'LLMs',
  'GPT-4o',
  'TypeScript',
  'Python',
  'Qdrant',
  'LangChain',
  'MCP',
  'Node.js',
  'Next.js',
  'Embeddings',
  'Function Calling',
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t-2 border-[#0A0A0A]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>

      <div className="max-w-2xl space-y-5 mb-10">
        <p className="text-base md:text-lg leading-relaxed text-[#333]">
          I&apos;m a software engineer with a full-stack JavaScript background who
          moved into AI engineering by building — RAG pipelines, vector databases,
          agents, fine-tuned models, and data pipelines, all shipped to production.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#333]">
          I contract with Blue AI, an EdTech platform using GPT-4o and OCR to
          automate student script marking. I&apos;ve also independently shipped two
          products: a personal finance analyzer for Nigerian bank statements with a
          custom fine-tuned categorization model, and a football scouting platform
          with a config-driven player rating engine calibrated on 10,000+ match
          samples.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#333]">
          I&apos;m looking for remote AI engineering roles where I can keep building
          things that work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-2.5 py-1 bg-[#F4F4F5] border border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
