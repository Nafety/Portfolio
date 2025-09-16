/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi"; // <-- nouvelle icône pour le rapport

import './Experiences.css';

// Import ../../assets/recentprojects/
import A2RL from '../../assets/experiences/A2RL.png';
import Gacha from '../../assets/experiences/Gacha.png';
import Cybersecurity from '../../assets/experiences/PIC_Cyber.png';

import A2RL_Report from './../../assets/experiences/A2RL_Rapport.pdf';
import Gacha_Report from './../../assets/experiences/Super_Gacha_ITI_Rapport.pdf';
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
      description: `Internship focused on object detection within the A2RL autonomous racing project. 
      Developed an automatic annotation module for Autonoma Simulator datasets, then designed and 
      trained deep learning models for object detection. Integrated the detection pipeline 
      into the dedicated software RTMaps, and contributed to real-world testing during track trials in Abu Dhabi.`,
      alter: 'A2RL Internship - Aladin',
      image: `${A2RL}`,
      ghLink: "https://github.com/Nafety/A2RL_Stage",
      demoLink: "https://a2rl-a.nafety.online",
      reportLink: A2RL_Report, 
      download: false,
    },
    { 
      id: 2,
      title: 'RAG Project - INSA Rouen Normandie', 
      description: `Cybersecurity project developed as part of a semester-long course at INSA Rouen Normandie. 
      Led a team of 9 students as project manager. 
      We built a Retrieval-Augmented Generation (RAG) system to assist CISOs in answering questions about the company's security policies. 
      Designed the architecture, coordinated the development process, and ensured integration of AI components with the knowledge base.`,
      alter: 'Cybersecurity RAG Project - INSA Rouen Normandie',
      image: `${Cybersecurity}`,
      ghLink: null,
      demoLink: null,
      reportLink: null,
      download: false,
    },
    { 
      id: 3,
      title: 'Gacha Game - INSA Rouen Normandie', 
      description: `Collaborative web project developed with classmates at INSA Rouen Normandie. 
      Built a Gacha-style game using Express.js, EJS templating, and SQLite for data storage. 
      Designed and implemented core gameplay mechanics and the full web interface.`,
      alter: 'Gacha Game Project - INSA Rouen Normandie',
      image: `${Gacha}`,
      ghLink: "https://github.com/Nafety/Gacha_ITI",
      demoLink: "https://gacha.nafety.online",
      reportLink: Gacha_Report, 
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

              {/* Boutons GitHub, Demo et Rapport */}
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

                {experience.reportLink && (
                  <Link 
                    href={experience.reportLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    underline="none"
                  >
                    <Tooltip title="Project Report" placement="top" TransitionComponent={Zoom}>
                      <IconButton className={classes.iconButton}>
                        <HiOutlineDocumentText className={classes.icon} />
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
