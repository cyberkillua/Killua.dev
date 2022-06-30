import styles from "../styles/Main.module.css";
import Image from "next/image";
import Link from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Scroll from "../public/scroll.svg";
const MainSection = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.bigText}>Front-end.</h1>
      <div className={styles.aboutMe}>
        <div className={styles.left}>
          <p>
            Hi, my name is Moshood
            <span className={styles.green}> “Killua”</span> Abiola Alimi. I
            build things for the web.
          </p>
          <div className={styles.contact}>
            <Image src={Github} alt="Github" className={styles.link} />
            <span className={styles.link}></span>
            <Image src={Link} alt="Linkedin" className={styles.link} />
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
            <Image src={Github} alt="Github" className={styles.link} />
            <span className={styles.link}></span>
            <Image src={Link} alt="Linkedin" className={styles.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
