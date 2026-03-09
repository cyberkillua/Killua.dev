import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Blue AI",
    description:
      "Production OCR + GPT-4o pipeline that scans handwritten student scripts and marks them against teacher-uploaded marking schemes. Human-in-the-loop review before AI processing.",
    tags: ["GPT-4o", "OCR", "Python", "React", "RAG"],
    github: null,
    live: null,
    badge: "Production App",
  },
  {
    name: "Qdrant Knowledge Base",
    description:
      "Persistent semantic search system supporting markdown, PDFs, and URLs. Metadata filtering, dynamic vector dimensions, deployed with live URL.",
    tags: ["Qdrant", "TypeScript", "Embeddings", "Vector DB"],
    github: "https://github.com/cyberkillua/knowledge-base",
    live: null,
  },
  {
    name: "LangChain Football Tactical Agent",
    description:
      "Multi-step agent that scrapes Sofascore with Playwright, combines match stats with web search, and generates tactical analysis for Premier League fixtures.",
    tags: ["LangChain", "Playwright", "TypeScript", "Agents"],
    github: "https://github.com/cyberkillua/tactial-anaylsis-agent",
    live: null,
  },
  {
    name: "Hybrid Search System",
    description:
      "Combined BM25 keyword search and embedding-based semantic search using Reciprocal Rank Fusion. Benchmarked against single-method retrieval.",
    tags: ["Python", "BM25", "Embeddings", "RAG"],
    github: "https://github.com/cyberkillua/bm25-embeddings-rag-pdf",
    live: null,
  },
  {
    name: "MCP Server — Sofascore",
    description:
      "Custom Model Context Protocol server exposing Sofascore match data as a tool. Connects directly to Claude Desktop.",
    tags: ["MCP", "TypeScript", "Claude"],
    github: "https://github.com/cyberkillua/mcp-sofascore",
    live: null,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="border-2 border-[#0A0A0A] bg-white p-5 shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-px hover:-translate-y-px transition-all flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-bold text-lg leading-tight">{project.name}</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.badge && (
            <span className="font-mono text-xs px-2 py-0.5 bg-[#FACC15] border border-[#0A0A0A] whitespace-nowrap">
              {project.badge}
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FACC15] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FACC15] transition-colors"
              aria-label="Live site"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#444] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 bg-[#F4F4F5] border border-[#0A0A0A]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t-2 border-[#0A0A0A]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
