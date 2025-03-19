import React from "react";
import styles from "./SkilledProfessionals.module.scss";
import image from "../assets/Image.png";
import whatsappIcon from "../assets/whatsapp.svg";
import { Button } from "@mui/material";

const SkilledProfessionals: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h2>For Skilled Professionals</h2>
        <p>
          Finding the right job shouldn’t be complicated. We simplify the job search process for:
        </p>

        <ul className={styles.jobList}>
          {[
            "CNC Machine Operators, Setters, and Programmers",
            "Quality Specialists",
            "Design Engineers",
            "Mid to Senior Level Engineering Professionals",
          ].map((job, index) => (
            <li key={index}>
              <i className="bi bi-gear-fill"></i>
              <b>{job}</b>
            </li>
          ))}
        </ul>

        <p>
          Our recruitment professionals make it easier than ever to find your next opportunity in manufacturing by bridging the gap between skilled workforce and leading manufacturing companies.
        </p>

        <div className={styles.buttons}>
          <a href="tel:+91872348877">
            <Button
              variant="contained"
              color="success"
              startIcon={<i className="bi bi-telephone-fill"></i>}
              className={styles.callButton}
            >
              +91780 680 5808
            </Button>
          </a>

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
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src={image} alt="Skilled Professional" className={styles.image} />
      </div>
    </section>
  );
};

export default SkilledProfessionals;
