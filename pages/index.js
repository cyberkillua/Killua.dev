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
    gsap.timeline().fromTo(
      "#sec",
      {
        opacity: 0,
        // duration: 2,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Killua Dev</title>
        <meta name="description" content="Moshood Alimi Abiola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.section} id="sec">
        <Navbar />
        <MainSection />
        <Project />
        <Books />
      </main>
    </div>
  );
}
