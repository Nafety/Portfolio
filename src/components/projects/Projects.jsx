import React from "react";
import { Showcase } from "../showcase/Showcase";

import LeLabo from '../../assets/projects/LeLabo.webp';
import Portfolio from '../../assets/projects/Portfolio.webp';
import DiscordBot from '../../assets/projects/Discord.webp';
import Spotemoji from '../../assets/projects/Spotemoji.webp';
import Orion from '../../assets/projects/Orion.webp';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    tagline: 'This website: a fast, animated portfolio built with React and Vite.',
    tags: ['React', 'Vite', 'Three.js'],
    description: `Designed and developed a modern portfolio website
      using Vite and ReactJS, with smooth animations and
      optimized performance to showcase projects and experiences.`,
    alter: 'Portfolio Website',
    image: Portfolio,
    ghLink: "https://github.com/Nafety/Portfolio",
    demoLink: "https://portfolio.nafety.online",
    download: false,
  },
  {
    id: 2,
    title: 'Orion',
    tagline: 'Your Spotify listening history as an interactive 3D universe.',
    tags: ['React', 'WebGL', 'Spotify API'],
    description: `Designed and developed an interactive 3D music visualization platform using React and WebGL, integrating the Spotify API to map user listening data in real time.
      Built a performant and intuitive interface with dynamic filtering and immersive UI to explore personal music ecosystems.`,
    alter: 'Orion',
    image: Orion,
    ghLink: "https://github.com/Nafety/Orion",
    demoLink: "https://orion.nafety.online",
    download: false,
  },
  {
    id: 3,
    title: 'Le Labo',
    tagline: 'A 3D old-fashioned and magical science lab to explore, full of general-knowledge games.',
    tags: ['Three.js', 'TypeScript', 'WebRTC', 'Wikidata'],
    description: `Built a first-person 3D browser game with Three.js and TypeScript: a cluttered,
      old-fashioned science lab mixed with magic, where each workshop is a different general-knowledge
      game (spinning globe, telescope, fact-checking desk, timeline clock, cipher chest…). Questions are
      pulled live from Wikipedia and Wikidata so they rarely repeat, up to 4 players can join through a
      magic portal (WebRTC peer-to-peer) with shared scores and a leaderboard, and a multi-step puzzle
      hidden in the scenery opens a secret passage to a treasure room.`,
    alter: 'Le Labo, a 3D science lab with a globe, a library, a telescope and a magic portal',
    image: LeLabo,
    ghLink: "https://github.com/Nafety/lab",
    demoLink: "https://lab.nafety.online",
    download: false,
  },
  {
    id: 4,
    title: 'Spot-emoji',
    tagline: 'Music recommendations from the emotions read on your face, live.',
    tags: ['Python', 'Computer vision', 'LLM'],
    description: `Developed a dual-server Python application that performs real-time emotion detection from a live camera feed,
      analyzes user emotions to generate personalized and enjoyable music recommendations
      via an LLM, and serves a modern web interface with interactive controls and dynamic visualizations.`,
    alter: 'Spot-emoji',
    image: Spotemoji,
    ghLink: "https://github.com/Nafety/Spotemoji",
    demoLink: null,
    download: false,
  },
  {
    id: 5,
    title: 'Discord Bot',
    tagline: 'A community bot with an in-server economy, a stock-market of items and music.',
    tags: ['Discord API', 'Economy system', 'Music'],
    description: `Created a feature-rich Discord bot including an
      in-server economy system, tradable items with a stock-market-like
      value, leaderboards, music playback, and entertainment commands
      for community engagement.`,
    alter: 'Discord Bot',
    image: DiscordBot,
    ghLink: "https://github.com/Nafety/Discord-bot",
    demoLink: null,
    download: false,
  },
];

export const Projects = () => <Showcase id="projects" items={projects} />;
