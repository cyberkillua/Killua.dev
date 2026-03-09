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
          I&apos;m a software engineer with a background in full-stack JavaScript
          who transitioned into AI engineering. Over the past few months I&apos;ve
          been systematically building AI systems from scratch — RAG pipelines,
          vector databases, function-calling agents, MCP servers — learning by
          shipping rather than studying.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#333]">
          I currently work on Blue AI, an EdTech platform that uses GPT-4o and OCR
          to automate student script marking for teachers. I&apos;m interested in
          remote opportunities where I can build AI-powered products that solve real
          problems.
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
