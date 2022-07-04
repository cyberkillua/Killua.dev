import styles from "../styles/Books.module.css";
import Image from "next/image";
import mad from "../public/mad.png";
import atomic from "../public/atomic.png";
import iamz from "../public/iamz.png";
import podcast from "../public/Podcast.svg";
import btn from "../public/btn.svg";
import Link from "next/link";
const Books = () => {
  return (
    <div className={styles.container}>
      <h1>Books & Podcasts that i enjoyed</h1>
      <div className={styles.bookContain}>
        <div className={styles.book}>
          <div>
            <Image src={iamz} alt="iamz" layout={"responsive"} />
          </div>
          <div>
            <Image src={atomic} alt="atomic" layout={"responsive"} />
          </div>
          <div>
            <Image src={mad} alt="mad" layout={"responsive"} />
          </div>
        </div>
        <div className={styles.pod}>
          <Link href="https://open.spotify.com/playlist/2czEtqvbLN6vv9KSx9TkZO?si=78dda07fcfb54f76">
            <a target="_blank" rel="noopener noreferrer">
              <Image src={podcast} alt="podcast" layout={"responsive"} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.contact} id="contact">
        <p>Have an idea or a project?</p>
        <div>
          <Link href="mailto:moshood988@gmail.com">
            <a target="_blank" rel="noopener noreferrer">
              <button>
                <Image src={btn} alt="btn" />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
