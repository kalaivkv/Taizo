import React from "react";
import styles from "./Job.module.scss";
import worker1 from "./assets/bio.png";
import whatsappIcon from "./assets/whatsapp.svg";
import phoneIcon from "./assets/whatsapp.svg";

const Job: React.FC = () => {
  return (
    <div className="container">
        <div className={styles.jobContainer}>
      <div className={styles.imageSection}>
        <img src={worker1} alt="Worker 1" className={styles.workerImage1} />
       
      </div>

      <div className={styles.textSection}>
        <h2>இரண்டு நாட்களில்</h2>
        <h1>
          நல்ல சம்பளத்துடன் <br /> வேலையில் சேரலாம்!
        </h1>

        <div className={styles.buttonGroup}>
          <button className={styles.whatsappButton}>
            <img src={whatsappIcon} alt="WhatsApp" />
            WhatsApp Us
          </button>
          <button className={styles.callButton}>
            <img src={phoneIcon} alt="Call" />
            +91 780 680 5808
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Job;
