import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { Button } from "@mui/material";
import whatsappIcon from "./assets/whatsapp.svg"; 
import homeImage from "./assets/new home-img1.jpg";

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

        <div className={styles.buttons}>
          <a href="tel:+91872348877">
            <Button
              variant="contained"
              color="success"
              startIcon={<i className="bi bi-telephone-fill"></i>}
              className={styles.callButton}
            >
              +91 87234 8877
            </Button>
          </a>

          <a
            href="https://wa.me/91872348877"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              color="success"
              startIcon={<img src={whatsappIcon} alt="WhatsApp" width="40" />}
              className={styles.whatsappButton}
            >
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src={homeImage} alt="Worker" className={styles.workerImage} loading="lazy" />
      </div>
    </div>
  );
};

export default Home;
