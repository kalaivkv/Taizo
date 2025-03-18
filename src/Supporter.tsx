import React from "react";
import styles from "./Supporters.module.scss";
import { Typography } from "@mui/material";

import nitTrichyLogo from "./assets/Cedilogo.png";
import stpiLogo from "./assets/STPI_logo.png";
import finBlueLogo from "./assets/finBlue_logo.png";

const supporters = [
  { name: "NIT Trichy", logo: nitTrichyLogo, alt: "NIT Trichy Logo" },
  { name: "STPI", logo: stpiLogo, alt: "STPI Logo" },
  { name: "FinBlue", logo: finBlueLogo, alt: "FinBlue Logo" },
];

const Supporters: React.FC = () => {
  return (
    <div className={styles.supporters}>
      <Typography variant="h6" className={styles.title}>
        Incubated by
      </Typography>
      <div className={styles.logoContainer}>
        {supporters.map((supporter, index) => (
          <img key={index} src={supporter.logo} alt={supporter.alt} className={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default Supporters;
