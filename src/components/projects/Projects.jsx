/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import './Projects.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/projects/Portfolio.png';
import DiscordBot from '../../assets/projects/Discord.png';
import RLBot from '../../assets/projects/Discord.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
  iconButton: {
    height: '2.5rem',
    width: '5rem',
    display: 'block', // ne bloque pas le layout
  },
  icon: {
    fontSize: '1.25rem', // couleur selon thème
  },
  buttonsWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
  },
}));

export const Projects = () => {
  const classes = useStyles();
  const [projects] = useState([
    { 
      id: 1,
      title: 'Portfolio Website', 
      description: `Designed and developed a modern portfolio website 
      using Vite and ReactJS, with smooth animations and 
      optimized performance to showcase projects and experiences.`,
      alter: 'Portfolio Website',
      image: `${Portfolio}`,
      ghLink: "https://github.com/tonprofil/portfolio",
      demoLink: "https://portfolio.nafety.online",
      download: false,
    },
    { 
      id: 2,
      title: 'Discord Bot', 
      description: `Created a feature-rich Discord bot including an 
      in-server economy system, tradable items with a stock-market-like 
      value, leaderboards, music playback, and entertainment commands 
      for community engagement.`,
      alter: 'Discord Bot',
      image: `${DiscordBot}`,
      ghLink: "https://github.com/Nafety/Discord-bot",
      demoLink: "https://discord.com/oauth2/authorize?client_id=1112406883278532619",
      download: true,
    },
    { 
      id: 3,
      title: 'Rocket League Bot', 
      description: `Developed a Rocket League bot using RLBot and 
      reinforcement learning techniques. Implemented training loops, 
      reward functions, and evaluation metrics to improve in-game 
      decision-making and strategy, with leaderboard tracking.`,
      alter: 'Rocket League Bot',
      image: `${RLBot}`,
      ghLink: "https://github.com/tonprofil/rocket-league-bot",
      demoLink: "https://portfolio.nafety.online",
      download: true, // exemple pour un fichier téléchargeable
    },
  ]);

  return (
    <section id="projects">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description">{project.description}</p>

              {/* Boutons GitHub et Demo/Download */}
              <div className={classes.buttonsWrapper}>
                {project.ghLink && (
                  <Link href={project.ghLink} target="_blank" rel="noopener noreferrer" underline="none">
                    <Tooltip title="GitHub Repository" placement="top" TransitionComponent={Zoom}>
                      <IconButton className={classes.iconButton}>
                        <BsGithub className={classes.icon} />
                      </IconButton>
                    </Tooltip>
                  </Link>
                )}

                {project.demoLink && (
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" underline="none" download={project.download}>
                    <Tooltip 
                      title={project.download ? "Download Link" : "Live Demo"} 
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
