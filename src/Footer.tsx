import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://www.taizo.in/assets/img/taizo-logo-img-white_footer.svg"
            alt="Taizo Logo"
            className={styles.logo}
          />
          <p>
            Taizo.in helps manufacturers in Tamil Nadu hire skilled CNC/VMC
            machine operators to engineers faster.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Links</h3>
          <a href="#">Jobseeker</a>
          <a href="#">About Us</a>
        </div>

        <div className={styles.links}>
          <h3>More</h3>
          <a href="#">Book a free call</a>
          <a href="#">WhatsApp Us</a>
          <a href="#">Introduction</a>
        </div>

        <div className={styles.links}>
          <h3>Careers</h3>
          <a href="#">We're Hiring</a>
        </div>

        <div className={styles.contact}>
          <div className={styles.socialIcons}>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
          </div>

          <p>We would love to hear from you</p>
          <a href="mailto:info@taizo.in" className={styles.email}>
            info@taizo.in
          </a>
          <span className={styles.phone}>- 7806805808</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © Taizo Technologies Private Limited</p>
        <div>
          <a href="#">Privacy Policy</a> / <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
