/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import './Experiences.css';

// Import ../../assets/recentprojects/
import A2RL from '../../assets/experiences/A2RL.png';
import Gacha from '../../assets/experiences/Gacha.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
  iconButton: {
    height: '2.5rem',
    width: '5rem',
    display: 'block',
  },
  icon: {
    fontSize: '1.25rem',
  },
  buttonsWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
  },
}));

export const Experiences = () => {
  const classes = useStyles();
  const [experiences] = useState([
    { 
      id: 1,
      title: 'A2RL Internship - Aladin', 
      description: `Internship on object detection within the A2RL autonomous racing project. 
      Developed an automatic annotation module for Superformula datasets, then designed and 
      trained deep learning models for object detection. Integrated the detection pipeline 
      into RTMaps and contributed to real-world testing during track trials in Abu Dhabi.`,
      alter: 'A2RL Internship - Aladin',
      image: `${A2RL}`,
      ghLink: "https://github.com/Nafety/A2RL_Stage",
      demoLink: "https://a2rl-a.nafety.online",
      download: false,
    },
    { 
      id: 2,
      title: 'Gacha Game Project - INSA Rouen Normandie', 
      description: `Collaborative web project developed with classmates at INSA Rouen Normandie. 
      Built a Gacha-style game using Express.js, EJS templating, and SQLite for data storage. 
      Designed and implemented core gameplay mechanics and the full web interface.`,
      alter: 'Gacha Game Project - INSA Rouen Normandie',
      image: `${Gacha}`,
      ghLink: "https://github.com/Nafety/Gacha_ITI",
      demoLink: "https://gacha.nafety.online",
      download: false,
    },
  ]);

  return (
    <section id="experiences">
      <Container component="main" className={classes.main} maxWidth="md">
        {experiences.map((experience) => (
          <div className="experience" key={experience.id}>
            <div className="__img_wrapper">
              <img src={experience.image} alt={experience.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={experience.id + '. ' + experience.title} />
              </h3>
              <p className="description">{experience.description}</p>

              {/* Boutons GitHub et Demo/Download */}
              <div className={classes.buttonsWrapper}>
                {experience.ghLink && (
                  <Link href={experience.ghLink} target="_blank" rel="noopener noreferrer" underline="none">
                    <Tooltip title="GitHub Repository" placement="top" TransitionComponent={Zoom}>
                      <IconButton className={classes.iconButton}>
                        <BsGithub className={classes.icon} />
                      </IconButton>
                    </Tooltip>
                  </Link>
                )}

                {experience.demoLink && (
                  <Link 
                    href={experience.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    underline="none" 
                    download={experience.download}
                  >
                    <Tooltip 
                      title={experience.download ? "Download Link" : "Live Demo"} 
                      placement="top" 
                      TransitionComponent={Zoom}
                    >
                      <IconButton className={classes.iconButton}>
                        <CgWebsite className={classes.icon} />
                      </IconButton>
                    </Tooltip>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
