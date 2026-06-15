import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Know Ball",
    status: "Live · Scouting Engine",
    statusAccent: true,
    description:
      "Football scouting and decision-support platform that turns raw match event data (Sofascore, Understat) into objective player and team evaluations — rating players on the skills that define their position and ranking them against their true positional peers, so it can answer whether a winger is genuinely elite or just flattered by a good team. At its core are six position-specific rating engines, each config-driven (tuned through JSON) and versioned so the methodology keeps improving while older outputs stay comparable. A percentile system contextualizes every player against their league or all leagues, with role-archetype detection for style, not just quality. Extended from players to teams: style fingerprints by phase of play, position-by-position squad quality maps, and evidence-backed tendencies inferred from the underlying stats. A monorepo with a daily Python pipeline on GitHub Actions, a Supabase/Postgres backend with materialized views and 50+ versioned migrations, and an installable PWA — favoring honest uncertainty (ranges, confidence bands) over false precision.",
    metrics: [
      { value: "6", label: "Rating Engines" },
      { value: "50+", label: "Migrations" },
      { value: "Daily", label: "Pipeline" },
    ],
    tags: ["Python", "React 19", "TanStack Start", "Tailwind v4", "Recharts", "Supabase", "Postgres", "PWA"],
    github: null,
    live: "https://know-balls.vercel.app",
  },
  {
    name: "QudiMapper",
    status: "Live · Fintech",
    statusAccent: true,
    description:
      "Full-stack personal-finance app for Nigerian bank statements — OPay, Kuda, UBA, Zenith, GTBank — across Excel and PDF, including password-protected files. Its core is a hybrid categorization pipeline balancing accuracy against cost: transactions flow through user rules, own-transfer detection, deterministic keyword rules, and a custom classifier I fine-tuned on labeled Nigerian transaction data, with only ambiguous cases reaching an LLM verification pass. I owned the ML-ops end to end — training, evaluation, and serving the model from a dedicated containerized inference API to fit real memory constraints. Turns raw statements into spending analytics, budgets, savings pots, and AI-written monthly insights.",
    metrics: [
      { value: "5", label: "Banks" },
      { value: "Fine-tuned", label: "Classifier" },
      { value: "Containerized", label: "Inference API" },
    ],
    tags: ["FastAPI", "SQLAlchemy", "React", "TypeScript", "Tailwind", "Recharts", "HuggingFace"],
    github: null,
    live: "https://finance-analyzer-six.vercel.app",
  },
  {
    name: "BlueAI",
    status: "Production · EdTech",
    statusAccent: true,
    description:
      "Full-stack educational assessment platform where teachers create assessments and student work is marked automatically by AI. Teachers generate questions with mark schemes, launch timed assessments via join codes, and control feedback release; students work in a locked-down exam environment and receive detailed feedback. The marking pipeline is the heart of the product — well beyond keyword matching: OCR and vision-based extraction for handwritten answers, mathematical-equivalence checking, step-by-step working analysis, and quality scoring that produces structured \"What Went Well / Next Steps\" feedback teachers can trust. Also handles past-paper extraction, class analytics, subscription tiering, an admin panel, and GDPR data requests. The core challenge was making AI marking trustworthy and fair — grading free-form and handwritten responses accurately, treating mathematically equivalent answers as correct however they're written, and keeping teachers in the loop.",
    metrics: [
      { value: "GPT-4o", label: "Marking + Gen" },
      { value: "OCR + Vision", label: "Handwriting" },
      { value: "Math-aware", label: "Grading" },
    ],
    tags: ["FastAPI", "MongoDB", "GPT-4o", "React 19", "Radix UI", "MathLive", "KaTeX", "Recharts"],
    github: null,
    live: "https://www.blueai.education/",
  },
  {
    name: "Tactical Agent",
    status: "GitHub · Agents",
    statusAccent: false,
    description:
      "Multi-step LangChain agent that scrapes Sofascore with Playwright, combines match stats with web search, and generates tactical analysis for Premier League fixtures.",
    tags: ["LangChain", "Playwright", "TypeScript"],
    github: "https://github.com/cyberkillua/tactial-anaylsis-agent",
    live: null,
  },
];

function ProjectEntry({ project }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 280;

  return (
    <article className="py-7 border-t border-rule">
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <h3 className="font-disp text-xl md:text-2xl font-medium">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-red transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-red transition-colors"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p
        className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-3 ${
          project.statusAccent ? "text-red" : "text-muted"
        }`}
      >
        {project.status}
      </p>

      <p
        className={`font-serif text-[15px] leading-relaxed text-body ${
          isLong ? "mb-2" : "mb-4"
        } ${isLong && !expanded ? "line-clamp-4" : ""}`}
      >
        {project.description}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="font-mono text-[10px] uppercase tracking-[0.12em] text-red border-b-[1.5px] border-red pb-0.5 hover:opacity-70 transition-opacity mb-4"
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>
      )}

      {project.metrics && (
        <div className="flex flex-wrap gap-6 mb-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-disp text-lg font-medium leading-none">
                {m.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          Selected Work
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {projects.map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
