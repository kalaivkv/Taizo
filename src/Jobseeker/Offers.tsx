import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Offers.module.scss";
import OfferImage from "../assets/Boys.png";
import verifiedIcon from "../assets/tick img.png";
import onRollIcon from "../assets/home-img.png";
import foodIcon from "../assets/job-img.png";
import salaryIcon from "../assets/allowance_img.png";
import whatsappIcon from "../assets/whatsapp.svg";

const Offers: React.FC = () => {
  const offerItems = [
    { text: "100% Free & Verified Jobs", icon: verifiedIcon },
    { text: "Free Food & Room", icon: onRollIcon },
    { text: "On-Roll Job", icon: foodIcon },
    { text: "Better Salary", icon: salaryIcon },
  ];

  const textOptions = [
    "Purchase / Sales",
    "CNC / VMC Operators",
    "HMC / VTL Operators",
    "Quality / Maintenance",
    "MIG / TIG Welder",
  ];

  const [currentText, setCurrentText] = useState(textOptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.offers}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>
          உங்களுக்கு <br />{" "}
          <span className={styles.dynamicText}>{currentText}</span> <br /> வேலை
          வேண்டுமா?
        </h2>
        <p className={styles.subText}>
          Send <strong>'Hi'</strong> on WhatsApp or Call Us
        </p>

        <div className={styles.buttons}>
          <button className={styles.whatsappButton}>
            <img src={whatsappIcon} alt="WhatsApp" />
            &nbsp;WhatsApp&nbsp;Us
          </button>

          <button className={styles.callButton}>
            <i className="bi bi-telephone-fill"></i>
            &nbsp;+91&nbsp;780&nbsp;680&nbsp;5808
          </button>
        </div>

        <ul className={`mt-5 ${styles.offerList}`}>
          {offerItems.map((item, index) => (
            <motion.li
              key={index}
              className={styles.offerItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={item.icon} alt="Check" className={styles.offerIcon} />
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={OfferImage} alt="Job Offer" className={styles.image} />
      </motion.div>
    </section>
  );
};

export default Offers;
