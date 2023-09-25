import styles from "../styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";
import plus from "../public/plus.svg";
import minus from "../public/minus.svg";
import { useState } from "react";

import { gsap } from "gsap";

const Project = () => {
  const cliked = () => {
    gsap.timeline().fromTo(
      "#about",
      {
        opacity: 0,
        scale: 0.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "bounce.out",
      }
    );
  };

  const [open, setOpen] = useState(0);

  const data = [
    {
      number: "01",
      name: "GoDump",
      about:
        "Godump is a B2B dump truck rental marketplace, connecting dump truck Owners with dump truck Renters in one robust digital platform.",
      link: "www.godump.co",
      placeholderLink: "https://godump.co",
      role: "Backend",
      date: "2023",
    },
    {
      number: "02",
      name: "MaterialsPro",
      about:
        "MaterialsPro is a B2B Construction Technology Platform facilitating seamless procurement of major categories of bulk Building & Construction materials by Customers, from our network of vetted and reliable Suppliers.",
      link: "www.materialspro.ng",
      placeholderLink: "https://www.materialspro.ng",
      role: "Backend",
      date: "2022",
    },
    {
      number: "03",
      name: "Benagos",
      about:
        "Benagos is an e-commerce store builder for Nigerian businesses and online sellers to create an online store in a few minutes providing a solution for e-commerce, payment, and logistics.",
      link: "www.benagos.com",
      placeholderLink: "https://www.benagos.com",
      role: "Frontend",
      date: "2022",
    },
    {
      number: "04",
      name: "Donate Contract",
      about:
        "this is a personal project i built in my quest to learn about smart contracts. This contract allows users to make coin donations,",
      link: "www.donate.com",
      placeholderLink: "https://marvelous-khapse-0c6ee0.netlify.app/",
      role: "Fullstack",
      date: "2023",
    },
  ];
  return (
    <div className={styles.container} id="project">
      <div className={styles.subhead}>Projects</div>
      <div className={styles.border}></div>
      <div className={styles.projects}>
        {data.map((item) => {
          return (
            <div key={item.number}>
              <div className={styles.oneProject} key={item.number}>
                <div className={styles.left}>
                  <div className={styles.number}>{item.number}</div>
                  <div className={styles.about}>
                    <p className={styles.name}>{item.name}</p>
                    <div id="about">
                      {open === item.number ? (
                        <>
                          <p className={styles.text}>{item.about}</p>
                          <div className={styles.roles}>
                            <p>
                              Role:&nbsp; &nbsp;{" "}
                              <span className={styles.green}>{item.role}</span>{" "}
                            </p>
                            <p>
                              Link: &nbsp; &nbsp;
                              <span className={styles.green}>
                                <Link href={item.placeholderLink} replace>
                                  <a target="_blank" rel="noopener noreferrer">
                                    {item.link}
                                  </a>
                                </Link>
                              </span>
                            </p>
                            <p>
                              Date:&nbsp; &nbsp;{" "}
                              <span className={styles.green}>{item.date}</span>{" "}
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                {!(open === item.number) ? (
                  <div
                    className={styles.plus}
                    onClick={() => {
                      setOpen(item.number);
                      cliked();
                    }}
                  >
                    <Image src={plus} alt="Plus" />
                  </div>
                ) : (
                  ""
                )}
                {open === item.number ? (
                  <div
                    className={styles.plus}
                    onClick={() => {
                      setOpen(0);
                    }}
                  >
                    <Image src={minus} alt="Minus" />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.border}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
