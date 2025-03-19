import React from "react";
import styles from "./Address.module.scss";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Chat from "../assets/chat.png"; 

interface AddressProps {
  title: string;
  location: string;
  details: string;
}

const addresses: AddressProps[] = [
  {
    title: "Chennai",
    location: "Registered Address",
    details:
      "New No – 9, Old No – 4, United India Colony, 4th Main Road, Kodambakkam, Chennai – 600024.",
  },
  {
    title: "Chennai",
    location: "Branch Office Address",
    details:
      "Software Technology Parks of India, 2nd Floor, No. 5, Rajiv Gandhi Salai, Taramani, Chennai – 600113.",
  },
  {
    title: "Coimbatore",
    location: "Branch Office Address",
    details:
      "ShriNivas, 2nd Floor, 26, 2nd St, Kasthuri Nagar, Ondipudur, Coimbatore, Tamil Nadu – 641016.",
  },
];


const Address: React.FC = () => {
    const displayedLocations = new Set();
  
    return (
      <div className="container my-4">
        <div className={styles.chatting}>
          <div className={styles.addressContainer}>
            <h2 className={styles.companyName}>
              Taizo Technologies Private Limited.
            </h2>
  
            {addresses.map((addr, index) => {
              const showLocation = !displayedLocations.has(addr.location);
              displayedLocations.add(addr.location);
  
              return (
                <div key={index} className={styles.addressSection}>
                  {showLocation && (
                    <h3 className={styles.addressHeading}>{addr.location}</h3>
                  )}
                  <div className={styles.addressBox}>
                    <div className={styles.addressContent}>
                      <h4>
                        <LocationOn className={styles.icon} />
                        {addr.title}
                      </h4>
                      <p>{addr.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
  
            <div className={styles.contactSection}>
              <div className={styles.contactItem}>
                <Email className={styles.icon} />
                <a href="mailto:info@taizo.in">info@taizo.in</a>
              </div>
  
              <p>For any help, you may call us at</p>
  
              <div className={styles.contactItem}>
                <Phone className={styles.icon} />
                <a href="tel:+917806805808">+91 780 680 5808</a>
              </div>
  
              <p>(Monday to Sunday, 10AM to 7PM)</p>
            </div>
          </div>
  
          <div className={styles.image}>
            <img src={Chat} alt="Chat Support" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Address;
  