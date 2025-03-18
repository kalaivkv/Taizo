import React from "react";
import styles from "./Mentors.module.scss";
import { Typography, Card, CardContent, Avatar } from "@mui/material";
import { LinkedIn, Email } from "@mui/icons-material";
import mentor1 from "./assets/Shanmugasundaram.png";
import mentor2 from "./assets/Vijayakumar.png";

const mentors = [
  {
    name: "Shanmuga Sundaram",
    title: "Director of Development",
    company: "Steps Knowledge Services Private Limited",
    description:
      "Shanmuga Sundaram has over 35 years of experience in special purpose machine design and development,process automation and product engineering",
    image: mentor1,
    linkedin: "#",
    email: "#",
  },
  {
    name: "Vijay Kumar",
    title: "Director of the Board & Group CEO",
    company: "Western Thomson (India) Limited",
    description:
      "Vijay Kumar has a background in business development industrial finance,corporate strategy, and risk management spanning over 28 years. He formerly worked with Cholamandalam as Business Head, SME, and Aditya Birla Group Finanace as Chief Risk Officer. He also spent 13 years with SISBI and was Country Risk Head for Euler Hermes India (Allianz Group)",
    image: mentor2,
    linkedin: "#",
    email: "#",
  },
];

const Mentors: React.FC = () => {
  return (
    <div className={styles.mentors}>
      <Typography variant="h5" className={styles.title}>
        Our Mentors
      </Typography>
      <div className={styles.cardContainer}>
        {mentors.map((mentor, index) => (
          <Card key={index} className={styles.card}>
            <Avatar src={mentor.image} alt={mentor.name} className={styles.avatar} />
            <CardContent>
              <Typography variant="h6" className={styles.name}>
                {mentor.name}
              </Typography>
              <Typography variant="body2" className={styles.position}>
                {mentor.title}
              </Typography>
              <Typography variant="body2" className={styles.company}>
                {mentor.company}
              </Typography>
              <Typography variant="body2" className={styles.description}>
                {mentor.description}
              </Typography>
              <div className={styles.icons}>
                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn className={styles.icon} />
                </a>
                <a href={`mailto:${mentor.email}`} target="_blank" rel="noopener noreferrer">
                  <Email className={styles.icon} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
