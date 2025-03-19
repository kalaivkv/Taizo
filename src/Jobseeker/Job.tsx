import React from "react";
import styles from "./Job.module.scss";
import worker1 from "../assets/bio.png";
import whatsappIcon from "../assets/whatsapp.svg";
import { Button } from "@mui/material";


const Job: React.FC = () => {
  return (
    <div className="container my-4 col-md-9">
        <div className={styles.jobContainer}>
      <div className={styles.imageSection}>
        <img src={worker1} alt="Worker 1" className={styles.workerImage1} />
       
      </div>

      <div className={styles.textSection}>
        <h2>இரண்டு நாட்களில்</h2>
        <h1>
          நல்ல சம்பளத்துடன்  
        </h1>
        <h3>
        வேலையில் சேரலாம்!
        </h3>

        
        <div className={styles.buttons}>
         
         <a
           href="https://wa.me/91780 680 5808"
           target="_blank"
           rel="noopener noreferrer"
         >
           <Button
             variant="outlined"
             color="success"
             startIcon={<img src={whatsappIcon} alt="WhatsApp" width="35" />}
             className={styles.whatsappButton}
           >
             WhatsApp Us
           </Button>
         </a>

         <a href="tel:+91780 680 5808">
           <Button
             variant="contained"
             color="success"
             startIcon={<i className="bi bi-telephone-fill"></i>}
             className={styles.callButton}
           >
             +91780 680 5808
           </Button>
         </a>

       </div>
        
      </div>
    </div>
    </div>
  );
};

export default Job;
