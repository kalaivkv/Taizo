import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button"; 
import whatsappIcon from "./assets/whatsapp.svg"; 
import homeImage from "./assets/new home-img1.jpg";

const textOptions = ["Purchase / Sales","CNC / VMC Operators", "HMC / VTL Operators ", "Quality / Maintanance", "MIG / TIG Welder"];

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
        <p>Made simple, organized and quick.</p>

        <div className={styles.buttons}>
          <Button 
            variant="contained"
            startIcon={<PhoneIcon />}
            className={styles.whatsappBtn}
          >
            +91 87234 8877
          </Button>
          <button className={styles.whatsappBtn}>
            <img src={whatsappIcon} alt="WhatsApp" />
            WhatsApp Us
          </button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img
          src={homeImage}
          alt="Worker"
          className={styles.workerImage}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
