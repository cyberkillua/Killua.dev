import Image from "next/image";
import Logo from "../public/logo.svg";
import close from "../public/x.svg";
import Music from "../public/music.svg";
import styles from "../styles/Burger.module.css";
import Link from "next/link";
const Burger = ({ setOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={Logo} alt="Killua Logo" />
        <Image
          src={close}
          alt="close"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <div className={styles.links}>
        <Link href="#project">
          <a
            onClick={() => {
              setOpen(false);
            }}
          >
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a
            onClick={() => {
              setOpen(false);
            }}
          >
            Contact
          </a>
        </Link>
        <a
          href="https://open.spotify.com/playlist/44cFKRRHkPrggaKRdFyoOr?si=5c4a31250c944ce8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Music} alt="Music" className={styles.music} />
        </a>
      </div>
    </div>
  );
};

export default Burger;
