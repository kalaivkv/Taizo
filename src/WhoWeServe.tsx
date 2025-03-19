import React from "react";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import Profile from "./assets/Profile.png";
import styles from "./WhoWeServe.module.scss";

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

          <div className={styles.buttonGroup}>
            <a href="tel:+91872348877">
              <Button
                variant="contained"
                color="success"
                startIcon={<PhoneIcon />}
                className={styles.callButton}
              >
                +91 87234 8877
              </Button>
            </a>
            <a href="https://wa.me/91872348877" target="_blank">
              <Button
                variant="outlined"
                color="success"
                startIcon={<WhatsAppIcon />}
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
