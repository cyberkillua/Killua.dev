import Logo from "../public/logo.svg";
import Music from "../public/music.svg";
import Menu from "../public/menu.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import Burger from "./Burger";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Burger setOpen={setOpen} />}
      <nav className={styles.nav}>
        <div>
          <Image src={Logo} alt="Killua Logo" />
        </div>
        <div className={styles.navLinks}>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">
            <Image src={Music} alt="Music" className={styles.music} />
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
