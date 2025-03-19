import React from "react";
import styles from "./Company.module.scss";
import factoryIcon from "../assets/vector.svg";
import usersIcon from "../assets/userspeoplesvgrepocom-2.svg";


const Company: React.FC = () => {
  return (
    <div className={styles.companyContainer}>
      <div className={styles.companyItem}>
        <img src={factoryIcon} alt="Factory Icon" className={styles.icon} />
        <div>
          <h2>100+</h2>
          <p>Manufacturing Companies</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={`${styles.companyItem} ${styles.companyItem1}`}>
        <div>
          <h2>50000+</h2>
          <p>Machine Operators, Diploma/ITI Freshers</p>
        </div>
        <img src={usersIcon} alt="Users Icon" className={styles.icon} />
      </div>
    </div>
  );
};

export default Company;
