import React from "react";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Profile from "./assets/Profile.png";
import styles from "./WhoWeServe.module.scss";
import whatsappIcon from "./assets/whatsapp.svg";

const WhoWeServe: React.FC = () => {
  return (
    <section>
      <h2 className={styles.heading}>Who we serve</h2>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={Profile} alt="Manufacturing" className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.subheading}>For Manufacturing Businesses</h3>
          <p className={styles.description}>
            We proudly cater to a wide range of manufacturing industries,
            ensuring their hiring needs are met with precision.
          </p>

          <ul className={styles.list}>
            {[
              "Automotive Parts Manufacturing",
              "Aerospace Component Production",
              "Medical Device Manufacturing",
              "Tool and Die Development",
              "Metal Fabrication",
              "Precision Engineering",
            ].map((item, index) => (
              <li key={index} className={styles.listItem}>
                <SettingsIcon className={styles.icon} />
                {item}
              </li>
            ))}
          </ul>

          <p className={styles.description}>
            Our specialized recruitment services connect you with top talent,
            helping your business achieve efficiency and excellence.
          </p>

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
              startIcon={<img src={whatsappIcon} alt="WhatsApp" width="35" />}
              className={styles.whatsappButton}
            >
              WhatsApp Us
            </Button>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
