import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Writing from '../Components/Writing';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moshood Alimi — AI Application Engineer</title>
        <meta
          name="description"
          content="AI Application Engineer based in Lagos, Nigeria. Building RAG systems, agents, and LLM-powered products."
        />
        <meta
          name="keywords"
          content="AI Engineer, RAG, LLM, GPT-4o, LangChain, Qdrant, TypeScript, Python, Next.js, AI Application Engineer, Lagos, Nigeria, Vector Search, Embeddings"
        />
        <meta name="author" content="Moshood Alimi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://moshoodalimi.xyz" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moshoodalimi.xyz" />
        <meta property="og:site_name" content="Moshood Alimi" />
        <meta property="og:title" content="Moshood Alimi — AI Application Engineer" />
        <meta
          property="og:description"
          content="AI Application Engineer based in Lagos, Nigeria. Building RAG systems, agents, and LLM-powered products."
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Moshood Alimi — AI Application Engineer" />
        <meta
          name="twitter:description"
          content="AI Application Engineer based in Lagos, Nigeria. Building RAG systems, agents, and LLM-powered products."
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Moshood Alimi',
              url: 'https://moshoodalimi.xyz',
              jobTitle: 'AI Application Engineer',
              description:
                'AI Application Engineer based in Lagos, Nigeria. Building RAG systems, agents, and LLM-powered products.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lagos',
                addressCountry: 'NG',
              },
              sameAs: [
                'https://github.com/cyberkillua',
                'https://linkedin.com/in/moshood-alimi',
                'https://substack.com/@moshoodalimi',
              ],
              knowsAbout: [
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
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#FAFAF9] text-[#0A0A0A]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
