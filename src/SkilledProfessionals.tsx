import React from "react";
import styles from "./SkilledProfessionals.module.scss";
import image from "./assets/Image.png";

const SkilledProfessionals: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h2>For Skilled Professionals</h2>
        <p>
          Finding the right job shouldn’t be complicated. We simplify the job
          search process for
        </p>

        <ul className={styles.jobList}>
          <li>
            <i className="bi bi-gear-fill"></i>
            <b>CNC Machine Operators, Setters, and Programmers</b>
          </li>
          <li>
            <i className="bi bi-gear-fill"></i>
            <b>Quality Specialists</b>
          </li>
          <li>
            <i className="bi bi-gear-fill"></i>
            <b>Design Engineers</b>
          </li>
          <li>
            <i className="bi bi-gear-fill"></i>
            <b>Mid to Senior Level Engineering Professionals</b>
          </li>
        </ul>

        <p>
          Our recruitment professionals make it simpler than ever to find your
          next opportunity in manufacturing companies by bridging the gap
          between skilled workforce and leading manufacturing companies.
        </p>

        <div className={styles.buttons}>
          <a href="tel:+91872348877" className={styles.callButton}>
            <i className="bi bi-telephone-fill"></i> +91 87234 8877
          </a>
          <a
            href="https://wa.me/91872348877"
            target="_blank"
            className={styles.whatsappButton}
          >
            <i className="bi bi-whatsapp"></i> WhatsApp Us
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
