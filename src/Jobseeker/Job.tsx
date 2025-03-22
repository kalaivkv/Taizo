import React from "react";
import styles from "./Job.module.scss";
import worker1 from "../assets/bio.png";
import whatsappIcon from "../assets/whatsapp.svg";

const Job: React.FC = () => {
  return (
    <div className="container my-4 col-md-9">
      <div className={styles.jobContainer}>
        <div className={styles.imageSection}>
          <img src={worker1} alt="Worker 1" className={styles.workerImage1} />
        </div>

        <div className={styles.textSection}>
          <h2>இரண்டு நாட்களில்</h2>
          <h1>நல்ல சம்பளத்துடன்</h1>
          <h3>வேலையில் சேரலாம்!</h3>

          <div className={styles.buttons2}>
            
            <button className={styles.whatsappButton2}>
              <img src={whatsappIcon} alt="WhatsApp" />
              &nbsp;WhatsApp&nbsp;Us
            </button>

            <button className={styles.callButton2}>
              <i className="bi bi-telephone-fill"></i>
              &nbsp;+91&nbsp;780&nbsp;680&nbsp;5808
            </button>
            
          </div>


        </div>
      </div>
    </div>
  );
};

export default Job;
