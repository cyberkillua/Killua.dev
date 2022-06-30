import Image from "next/image";
import Logo from "../public/logo.svg";
import close from "../public/x.svg";
import Music from "../public/music.svg";
import styles from "../styles/Burger.module.css"
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
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">
          <Image src={Music} alt="Music" />
        </a>
      </div>
    </div>
  );
};

export default Burger;
