import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import img1 from "./assets/gopimani.png";
import img2 from "./assets/vinothmani.png";
import img3 from "./assets/aboutus_Aravindelumalai.png";
import img4 from "./assets/vinothKumar.png";
import img5 from "./assets/aboutus_Harisshvenu.png";
import img6 from "./assets/aboutus_Kasilingamsaravanan.png";
import img7 from "./assets/pandiyammal.png";
import img8 from "./assets/adithya.png";
import img9 from "./assets/Sowmiya_png.jpeg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Gopi Mani",
    role: "CEO and Co-founder",
    image: img1,
    linkedin: "#",
    email: "mailto:gopi@example.com",
  },
  {
    name: "Vinoth Mani",
    role: "COO and Co-founder",
    image: img2,
    linkedin: "#",
    email: "mailto:vinoth@example.com",
  },
  {
    name: "Aravind Elumalai",
    role: "Head of Design",
    image: img3,
    linkedin: "#",
    email: "mailto:aravind@example.com",
  },
  {
    name: "Vinoth Kumar Udhayakumar",
    role: "Brand Ambassador",
    image: img4,
    linkedin: "#",
    email: "mailto:vinothkumar@example.com",
  },
  {
    name: "Harissh Venu",
    role: "Consulting CTO",
    image: img5,
    linkedin: "#",
    email: "mailto:harish@example.com",
  },
  {
    name: "Kasilingam Saravanan",
    role: "Head of Customer Experience",
    image: img6,
    linkedin: "#",
    email: "mailto:kasilingam@example.com",
  },
  {
    name: "Pandiyammal Prabakaran",
    role: "Product Manager",
    image: img7,
    linkedin: "#",
    email: "mailto:pandiyammal@example.com",
  },
  {
    name: "Adithya Kalimuthu",
    role: "Software Development Manager",
    image: img8,
    linkedin: "#",
    email: "mailto:adithya@example.com",
  },
  {
    name: "Sowmiya Gunasekaran",
    role: "Lead Recruiter",
    image: img9,
    linkedin: "#",
    email: "mailto:sowmiya@example.com",
  },
];

const Team: React.FC = () => {
  return (
    <div className="container">
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          width: "100%",
          paddingTop:2
        }}
      >
        Our Team
      </Typography>

      <Grid container spacing={3} sx={{ padding: 4 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                padding: 2,
                boxShadow: 3,
                width: 300,
                minHeight: 300,
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 150, height: 150, margin: "auto", my: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {member.name}
                </Typography>

                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {member.role}
                </Typography>
              </CardContent>
              <div>
                <IconButton
                  component="a"
                  href={member.linkedin}
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href={member.email}>
                  <EmailIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Team;
