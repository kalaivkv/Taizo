import React from "react";
import styles from "./Clients.module.scss";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4-Bakgiyam.jpg';
import img5 from '../assets/5-Orient.jpg';
import img6 from '../assets/6-Dwaraka-Engineerings.jpg';
import img7 from '../assets/7-V-TORK.jpg';
import img8 from '../assets/8-microform-automation.jpg';
import img9 from '../assets/9-metal-forms-private-limited.jpg';
import img10 from '../assets/10-KVTS.jpg';
import img11 from '../assets/11-Spin-AQM-Technologies-(I)-Pvt.-Ltd..jpg';
import img12 from '../assets/12-PRIMAEAM-SOLUTIONS-PRIVATE-LIMITED.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Clients: React.FC = () => {
  return (
   <div className="container mt-5">
    <h1>Our Clients</h1>
     <div className={styles.clientsContainer}>
      <div className={styles.slider}>
       
        {[...images, ...images].map((img, index) => (
          <div key={index} className={styles.clientItem}>
            <img src={img} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Clients;