import styles from "../styles/Main.module.css";
import Image from "next/image";
import Linkedin from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Scroll from "../public/scroll.svg";
import Link from "next/link";

import { useEffect } from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const MainSection = () => {
  useEffect(() => {
    gsap
      .timeline({
        repeat: -1,
      })
      .to("#bigText", {
        text: "Back-end.",
        duration: 3,
        ease: "none",
        yoyo: true,
        repeat: 1,
      })
      .to("#bigText", {
        delay: 0.1,
        text: "Front-end.",
        duration: 3,
        ease: "none",
        repeat: 1,
        yoyo: true,
      });
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <h1 id="bigText" className={styles.bigText}></h1>
      </div>

      <div className={styles.aboutMe}>
        <div className={styles.left}>
          <p>
            Hi, my name is Moshood
            <span className={styles.green}> “Killua”</span> Abiola Alimi. I
            build things for the web.
          </p>
          <div className={styles.contact}>
            <Link href="https://github.com/cyberkillua">
              <a target="_blank" rel="noopener noreferrer">
                {" "}
                <Image src={Github} alt="Github" className={styles.link} />{" "}
              </a>
            </Link>

            <span className={styles.link}></span>
            <Link href="https://www.linkedin.com/in/moshood-alimi-413869199/">
              <a target="_blank" rel="noopener noreferrer">
                <Image src={Linkedin} alt="Linkedin" className={styles.link} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.scroll}>
          <Image src={Scroll} alt="Scroll Down" className={styles.scrollIcon} />
        </div>
        <div className={styles.right}>
          <p>
            I’m a software Engineer with experience in working with both
            front-end and back-end Java script frameworks and libraries for
            personal projects, client-facing products, and teams with fast
            development cycles.
          </p>
          <div className={styles.contact2}>
            <Link href="https://github.com/cyberkillua">
              <a target="_blank" rel="noopener noreferrer">
                {" "}
                <Image src={Github} alt="Github" className={styles.link} />{" "}
              </a>
            </Link>

            <span className={styles.link}></span>
            <Link href="https://www.linkedin.com/in/moshood-alimi-413869199/">
              <a target="_blank" rel="noopener noreferrer">
                <Image src={Linkedin} alt="Linkedin" className={styles.link} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
