import React from "react";
import { Showcase } from "../showcase/Showcase";

import A2RL from '../../assets/experiences/A2RL.webp';
import Gacha from '../../assets/experiences/Gacha_2.webp';
import Cybersecurity from '../../assets/experiences/PIC_Cyber.webp';
import AMP from '../../assets/experiences/AMP.webp';
import A2RL_Report from './../../assets/experiences/A2RL_Rapport.pdf';
import Gacha_Report from './../../assets/experiences/Super_Gacha_ITI_Rapport.pdf';

const experiences = [
  {
    id: 1,
    title: 'AMP - Aubay',
    label: 'Aubay · research internship',
    tagline: 'Prompt-based musical editing with discrete diffusion models on MIDI.',
    tags: ['Diffusion models', 'Symbolic music', 'Deep learning'],
    description: `Research internship focused on prompt-based musical editing using conditional diffusion models on symbolic music (MIDI). Designed a full REMI-based preprocessing pipeline with bar-aware segmentation, token masking, and multi-track handling. Trained discrete diffusion models for music generation and infilling, and developed sampling strategies enabling controllable editing from textual or structural prompts. Investigated conditioning mechanisms, dataset consistency (vocabulary, tokenization), and robustness of generation for structured musical outputs.`,
    alter: 'Aubay Musical Playlist',
    image: AMP,
    ghLink: null,
    demoLink: null,
    reportLink: null,
    download: false,
  },
  {
    id: 2,
    title: 'A2RL Internship - Aladin',
    label: 'Aladin · A2RL autonomous racing',
    tagline: 'Object detection for an autonomous race car, tested on track in Abu Dhabi.',
    tags: ['Object detection', 'Deep learning', 'RTMaps'],
    description: `Internship focused on object detection within the A2RL autonomous racing project. Developed an automatic annotation module for Autonoma Simulator datasets, then designed and trained deep learning models for object detection. Integrated the detection pipeline into the dedicated software RTMaps, and contributed to real-world testing during track trials in Abu Dhabi.`,
    alter: 'A2RL Internship - Aladin',
    image: A2RL,
    ghLink: null,
    demoLink: null,
    reportLink: A2RL_Report,
    download: false,
  },
  {
    id: 3,
    title: 'RAG Project - INSA Rouen Normandie',
    label: 'INSA Rouen Normandie · cybersecurity',
    tagline: 'A RAG assistant for CISOs, built by a team of 9 that I led.',
    tags: ['RAG', 'LLM', 'Project management'],
    description: `Cybersecurity project developed as part of a semester-long course at INSA Rouen Normandie. Led a team of 9 students as project manager. We built a Retrieval-Augmented Generation (RAG) system to assist CISOs in answering questions about the company's security policies. Designed the architecture, coordinated the development process, and ensured integration of AI components with the knowledge base.`,
    alter: 'Cybersecurity RAG Project - INSA Rouen Normandie',
    image: Cybersecurity,
    ghLink: null,
    demoLink: null,
    reportLink: null,
    download: false,
  },
  {
    id: 4,
    title: 'Gacha Game - INSA Rouen Normandie',
    label: 'INSA Rouen Normandie · web project',
    tagline: 'A collectible card web game, from gameplay to interface.',
    tags: ['Express.js', 'EJS', 'SQLite'],
    description: `Collaborative web project developed with classmates at INSA Rouen Normandie. Built a Gacha-style game using Express.js, EJS templating, and SQLite for data storage. Designed and implemented core gameplay mechanics and the full web interface.`,
    alter: 'Gacha Game Project - INSA Rouen Normandie',
    image: Gacha,
    ghLink: "https://github.com/Nafety/Gacha_ITI",
    demoLink: null,
    reportLink: Gacha_Report,
    download: false,
  },
];

export const Experiences = () => <Showcase id="experiences" items={experiences} />;
