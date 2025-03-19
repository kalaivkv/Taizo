import React from "react";
import styles from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.text}>
        Welcome toTaizo.in, your trusted partner in recruitment for machining
        manufacturers. We specialize in connecting skilled CNC machine operators
        with leading machining manufacturing companies, ensuring that businesses
        thrive with the right professionals in place. From skilled machine
        operators to engineers, we help companies fill critical roles that
        demand technical expertise and hands-on experience. AtTaizo.in, we
        understand the unique challenges of the manufacturing industry and the
        need for a reliable workforce that can drive efficiency. We’re not just
        a recruitment agency – we’re committed to helping both companies and
        candidates achieve their goals. Whether you're looking for skilled CNC
        machine operators or top-tier engineering talent,Taizo.in is here to
        bridge the gap with tailored hiring solutions.
      </p>
    </section>
  );
};

export default AboutUs;
