import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",

    // 🔹 espace pour sidebar et logos
    paddingLeft: "15rem",
    paddingRight: "6rem",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "4rem",
      paddingRight: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  heading: {
    textAlign: "left", // aligné à gauche par défaut
    [theme.breakpoints.down("sm")]: {
      textAlign: "center", // centré sur mobile
    },
  },
  name: {
    fontSize: "clamp(1.5rem, 2vw, 2.5rem)", // plus petit sur mobile
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "clamp(1.2rem, 4vw, 1.8rem)", // mobile encore plus petit
    },
  },
  jobs: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: "clamp(2.5rem, 6vw, 6rem)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "clamp(1.8rem, 5vw, 3rem)", // mobile plus petit
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="xl">
      <div className={classes.heading}>
        <Typography component="h2" className={classes.name}>
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography component="h1" className={classes.jobs}>
          <TextDecrypt text={`${Resume.basics.job1} `} />
          <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </div>
    </Container>
  );
};
