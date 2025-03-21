import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import whatsappIcon from "../assets/whatsapp.svg";
import homeImage from "../assets/new home-img1.jpg";

const textOptions = [
  "Purchase / Sales",
  "CNC / VMC Operators",
  "HMC / VTL Operators",
  "Quality / Maintenance",
  "MIG / TIG Welder",
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <h2>Hiring</h2>
        <h1>
          <span>{textOptions[index]}</span>
        </h1>
        <p>Made simple, organized, and quick.</p>

        <div className="buttons">
            <button className="callButton">
              <i className="bi bi-telephone-fill"></i>
              &nbsp;+91&nbsp;780&nbsp;680&nbsp;5808
            </button>
            <button className="whatsappButton">
              <img src={whatsappIcon} alt="WhatsApp" />
              &nbsp;WhatsApp&nbsp;Us
            </button>
          </div>
      </div>

      <div className={styles.rightSection}>
        <img src={homeImage} alt="Worker" className={styles.workerImage} />
      </div>
    </div>
  );
};

export default Home;
