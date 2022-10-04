import Head from "next/head";
import Image from "next/image";
import Books from "../Components/Books";
import MainSection from "../Components/MainSection";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        "#app",
        {
          autoAlpha: 0,
          // opacity: 0,
        },
        {
          autoAlpha: 1,
          // opacity: 1,
          // duration: 1,
          delay: 1,
        }
      )
      .fromTo(
        ".rest",
        {
          opacity: 0,
          y: 400,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      );
  }, []);
  return (
    <div className={styles.container} id="app">
      <Head>
        <title>Killua Dev</title>
        <meta name="description" content="Moshood Alimi Abiola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.section}>
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
