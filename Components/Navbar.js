import Logo from "../public/logo.svg";
import Music from "../public/music.svg";
import Menu from "../public/menu.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import Burger from "./Burger";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Burger setOpen={setOpen} />}
      <nav className={styles.nav}>
        <div>
          <Link href="#home">
            <a>
              <Image src={Logo} alt="Killua Logo" />
            </a>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="#project">
            <a>Projects</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
          <a
            href="https://open.spotify.com/playlist/44cFKRRHkPrggaKRdFyoOr?si=5c4a31250c944ce8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Music}
              alt="Music"
              className={styles.music}
              id="music"
            />
          </a>
        </div>
        <div className={styles.toggler}>
          <Image src={Menu} alt="Menu" onClick={() => setOpen(!open)} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
