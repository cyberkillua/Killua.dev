import Head from "next/head";
import Image from "next/image";
import MainSection from "../Components/MainSection";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Killua Dev</title>
        <meta name="description" content="Moshood Alimi Abiola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <MainSection />
        <Project />
      </main>
    </div>
  );
}
