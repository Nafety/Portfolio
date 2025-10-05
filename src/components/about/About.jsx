/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import { Line } from "../line/Line";

import profile from "../../assets/profile_image.png";
import "./About.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
  aboutCard: {
    width: "85%",
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    padding: theme.spacing(3),
    textAlign: "center",
  },
  imgWrapper: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "12px",
  },
  aboutText: {
    marginTop: theme.spacing(2),
    fontSize: "1rem",
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  seeMoreBtn: {
    marginTop: theme.spacing(1),
    cursor: "pointer",
    color: theme.palette.text.primary,
    border: "none",
    background: "none",
    padding: 0,
    fontWeight: "bold",
    alignSelf: "center",
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a Computer Science and Engineering student with a broad curiosity for technology. 
  I enjoy exploring many areas, with a particular interest in computer vision, deep learning, machine learning, and web development. 
  I like taking on new challenges, experimenting with different domains, and building projects that combine creativity and technical depth.`;

  return (
    <section id="about" className="about"> {/* <-- ici, ajoute l'id */}
      <img src={profile} alt="profile" className="_img" />
      <div className="line-wrapper-cadre">
        <Line />
      </div>
      <div className="_content_wrapper">
        <Typography component="h2" variant="h5">
          <TextDecrypt text={greetings} />
        </Typography>
        <p>{aboutme}</p>
        <button
          className={classes.seeMoreBtn} // même style que ton bouton seeMoreBtn
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <i className="fas fa-terminal"></i>
          <Typography component="span">Send me a message.</Typography>
        </button>

      </div>
    </section>
  );
};
