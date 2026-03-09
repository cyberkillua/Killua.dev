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
      "This is a conversation between Claude and me where we learn about transformers and how attention mechanisms work, step by step.",
    href: "https://killy7.substack.com/p/i-learned-transformers-by-arguing",
  },
  {
    title: "Evaluation Metrics for LLMs and RAG Systems",
    platform: "LinkedIn",
    description: "Why Evaluation is Hard?",
    href: "https://www.linkedin.com/pulse/evaluation-metrics-llms-rag-systems-moshood-alimi-1ukff/",
  },
  {
    title: "Most 'AI Engineers' Can't Answer These Basic Questions",
    platform: "Substack",
    description:
      "This is a Q&A between Claude and me to gauge my understanding of this book I read titled AI Engineering by Chip Huyen.",
    href: "https://killy7.substack.com/p/ai-engineering-fundamentals-a-first",
  },
];

const platformColors = {
  LinkedIn: "bg-[#E8F4FD] border-[#0A66C2] text-[#0A66C2]",
  Substack: "bg-[#FFF3E0] border-[#FF6719] text-[#FF6719]",
};

export default function Writing() {
  return (
    <section
      id="writing"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t-2 border-[#0A0A0A]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Writing</h2>

      <div className="max-w-2xl space-y-7">
        {articles.map((article) => (
          <div key={article.title} className="border-l-4 border-[#FACC15] pl-5">
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-base hover:text-[#FACC15] transition-colors block mb-1"
            >
              {article.title}
            </a>
            <span
              className={`inline-block font-mono text-xs px-1.5 py-0.5 border ${
                platformColors[article.platform] ||
                "bg-[#F4F4F5] border-[#0A0A0A]"
              } mb-2`}
            >
              {article.platform}
            </span>
            <p className="text-sm text-[#555] leading-relaxed">
              {article.description}
            </p>
          </div>
        ))}
      </div>

      <a
        href="https://killy7.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 font-semibold text-sm border-b-2 border-[#0A0A0A] hover:text-[#FACC15] hover:border-[#FACC15] transition-colors pb-0.5"
      >
        Read more on Substack →
      </a>
    </section>
  );
}
