import Head from "next/head";
import Image from "next/image";
import Books from "../Components/Books";
import MainSection from "../Components/MainSection";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

import gsap from "gsap";

const animate = () => {
  const tl = gsap.timeline({ defaults: { opacity: 0 } });

  tl.from(".section", {
    autoAlpha: 1,
  });
};

export default function Home() {
  useEffect(() => {
    window.addEventListener("load", function (event) {
      animate();
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Killua Dev</title>
        <meta name="description" content="Moshood Alimi Abiola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="section">
        <Navbar />
        <div className="rest">
          <MainSection />
          <Project />
          <Books />
        </div>
      </main>
    </div>
  );
}
