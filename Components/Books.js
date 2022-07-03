import styles from "../styles/Books.module.css";
import Image from "next/image";
import mad from "../public/mad.svg";
import atomic from "../public/atomic.svg";
import iamz from "../public/iamz.svg";
import podcast from "../public/Podcast.svg";
import btn from "../public/btn.svg";
const Books = () => {
  return (
    <div className={styles.container}>
      <h1>Books & Podcasts that i enjoyed</h1>
      <div className={styles.bookContain}>
        <div className={styles.book}>
          <div>
            <Image
              src={iamz}
              alt="iamz"
              width={303}
              height={453}
              layout={"responsive"}
            />
          </div>
          <div>
            <Image
              src={atomic}
              alt="atomic"
              width={303}
              height={453}
              layout={"responsive"}
            />
          </div>
          <div>
            <Image
              src={mad}
              alt="mad"
              width={303}
              height={453}
              layout={"responsive"}
            />
          </div>
        </div>
        <div className={styles.pod}>
          <Image src={podcast} alt="podcast" />
        </div>
      </div>
      <div className={styles.contact}>
        <p>Have an idea or a project?</p>
        <div>
          <button>
            <Image src={btn} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
