import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Know Ball",
    status: "Live · Scouting Engine",
    statusAccent: true,
    description:
      "I built this to answer a question stats sites can't: is a winger genuinely elite, or just flattered by a good team? It pulls raw match event data from Sofascore and Understat and rates players with six position-specific engines, each tuned through JSON configs and versioned so the methodology can improve without breaking older outputs. Percentiles put every player in context against their league, archetype detection captures style rather than just quality, and the same machinery extends to teams — style fingerprints by phase of play, position-by-position squad quality maps. A daily Python pipeline on GitHub Actions feeds a Supabase/Postgres backend with 50+ versioned migrations, and the whole thing ships as an installable PWA. Where the data is thin, it shows ranges and confidence bands instead of pretending to precision.",
    tags: [
      "Python",
      "React 19",
      "TanStack Start",
      "Tailwind v4",
      "Recharts",
      "Supabase",
      "Postgres",
      "PWA",
    ],
    github: null,
    live: "https://know-balls.vercel.app",
  },
  {
    name: "QudiMapper",
    status: "Live · Fintech",
    statusAccent: true,
    description:
      "Personal-finance app that reads Nigerian bank statements — OPay, Kuda, UBA, Zenith, GTBank, in Excel or PDF, password-protected or not — and turns them into spending analytics, budgets, savings pots, and monthly insights. The hard problem was categorizing transactions accurately without burning money on LLM calls, so categorization runs as a pipeline: user rules first, then own-transfer detection, then keyword rules, then a classifier I fine-tuned on labeled Nigerian transaction data. Only the ambiguous leftovers reach an LLM. I trained, evaluated, and deployed the classifier myself, serving it from a containerized inference API sized to fit real memory constraints.",
    tags: [
      "FastAPI",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "Tailwind",
      "Recharts",
      "HuggingFace",
    ],
    github: null,
    live: "https://finance-analyzer-six.vercel.app",
  },
  {
    name: "BlueAI",
    status: "Production · EdTech",
    statusAccent: true,
    description:
      'Educational assessment platform where teachers create assessments and AI marks the student work. Teachers generate questions with mark schemes, launch timed assessments via join codes, and decide when feedback goes out; students sit the assessment in a locked-down exam environment. Most of the work went into making the marking trustworthy: OCR and vision models read handwritten answers, an equivalence checker accepts mathematically identical answers however they\'re written, and the grader analyzes step-by-step working to produce structured "What Went Well / Next Steps" feedback. Around that sits past-paper extraction, class analytics, subscription tiers, an admin panel, and GDPR data requests.',
    tags: [
      "FastAPI",
      "MongoDB",
      "GPT-4o",
      "React 19",
      "Radix UI",
      "MathLive",
      "KaTeX",
      "Recharts",
    ],
    github: null,
    live: "https://www.blueai.education/",
  },
  {
    name: "Ops Intelligence Platform",
    status: "Production · Security Intelligence",
    statusAccent: true,
    description:
      "Situational-awareness dashboard that puts verified security incidents and live field assets on one map. It ingests news APIs, RSS feeds, humanitarian datasets, and a real-time messaging listener, normalizes everything into a single event model, then runs an LLM pipeline to separate genuine recent incidents from noise — a cheap pre-filter, a date-aware classifier that rejects stale events, and a second verification pass before anything reaches the map. Free-text locations get geocoded into markers, and a telemetry listener decodes GPS, heading, and status from field devices over TCP/UDP, so moving assets render on the same map as the incidents. Multi-tenant with role-based access, and the whole AI pipeline runs on free-tier infrastructure — quota buckets, pre-filtering, and fingerprint deduplication keep inference cost at zero.",
    tags: [
      "TypeScript",
      "Bun",
      "Hono",
      "PostgreSQL",
      "LangGraph",
      "React",
      "TanStack",
      "Leaflet",
    ],
    github: null,
    live: null,
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
    <section
      id="work"
      className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24"
    >
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
