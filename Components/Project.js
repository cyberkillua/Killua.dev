import styles from "../styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";
import plus from "../public/plus.svg";
import minus from "../public/minus.svg";
import { useState } from "react";

const Project = () => {
  const [open, setOpen] = useState(0);

  const data = [
    {
      number: "01",
      name: "Fezzant",
      about:
        "Fezzant is a B2B product that helps protect businesses for cyber attacks by educating them on the dangers of cyber attacks and how to protect themselves.",
      link: "www.fezzant.com",
      placeholderLink: "https://www.fezzant.com",
      role: "Backend",
      date: "2022",
    },
    {
      number: "02",
      name: "MaterialsPro",
      about:
        "MaterialsPro are a B2B Construction Technology Platform facilitating seamless procurement of major categories of bulk Building & Construction materials by Customers, from our network of vetted and reliable Suppliers.",
      link: "www.materialspro.ng",
      placeholderLink: "https://www.materialspro.ng",
      role: "Backend",
      date: "2022",
    },
    {
      number: "03",
      name: "Benagos",
      about:
        "Benagos is an e-commerce store builder for Nigerian businesses and online sellers to create an online store in few minutes providing a solution for ecommerce, payment and logistics.",
      link: "www.benagos.com",
      placeholderLink: "https://www.benagos.com",
      role: "Frontend",
      date: "2022",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.subhead}>Projects</div>
      <div className={styles.border}></div>
      <div className={styles.projects}>
        {data.map((item) => {
          return (
            <>
              <div className={styles.oneProject} key={item.number}>
                <div className={styles.left}>
                  <div className={styles.number}>{item.number}</div>
                  <div className={styles.about}>
                    <div className={styles.name}>{item.name}</div>
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
                {!(open === item.number) ? (
                  <div
                    className={styles.plus}
                    onClick={() => {
                      setOpen(item.number);
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
