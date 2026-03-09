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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Moshood Alimi — AI Application Engineer" />
        <meta
          property="og:description"
          content="AI Application Engineer based in Lagos, Nigeria. Building RAG systems, agents, and LLM-powered products."
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
