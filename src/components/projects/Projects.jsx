import React from "react";
import { Showcase } from "../showcase/Showcase";
import { OtherProjects } from "./OtherProjects";

import NextWatch from '../../assets/projects/NextWatch.webp';
import Orion from '../../assets/projects/Orion.webp';
import OpenFoodFacts from '../../assets/projects/OpenFoodFacts.webp';
import LeLabo from '../../assets/projects/LeLabo.webp';
import Portfolio from '../../assets/projects/Portfolio.webp';
import DiscordBot from '../../assets/projects/Discord.webp';
import Spotemoji from '../../assets/projects/Spotemoji.webp';

// The main projects, shown in full
const featured = [
  {
    id: 1,
    title: 'Next Watch',
    tagline: 'Film recommendations from your Letterboxd ratings, computed entirely in your browser.',
    tags: ['Machine learning', 'Python', 'React', 'TypeScript', 'Cloudflare'],
    description: `Built a hybrid recommender that scores 10,000 films from three signals: their TMDB
      description (multilingual e5 embeddings), the taste of similar people (SVD on MovieLens 32M ratings)
      and public opinion. Evaluated by cross-validation on real ratings, the blend beats every single
      signal. The scoring was then ported to TypeScript, checked against Python by a parity test, so that
      it runs in the visitor's browser: ratings never leave it. A Cloudflare Worker relays the TMDB API,
      and favourites export straight to the Letterboxd watchlist.`,
    alter: 'Next Watch, a grid of recommended film posters with a score for each signal',
    image: NextWatch,
    ghLink: "https://github.com/Nafety/Next-Watch",
    demoLink: "https://watch.nafety.online",
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
    title: 'Open Food Facts contribution',
    tagline: 'A fine-tuned LLM that suggests fixes for the ingredients Open Food Facts does not recognize.',
    tags: ['LLM fine-tuning', 'QLoRA', 'Hugging Face', 'Open source'],
    description: `Fine-tuned Qwen2.5-1.5B with QLoRA on 41,000 examples built automatically from the
      Open Food Facts database and taxonomy, to link unrecognized ingredient names to the right entry,
      propose a new one, or flag noise. On a hand-annotated test set it finds 94% of the missing
      allergens, and it fixed 47 of the 49 names reported in two open issues. Shared with the project's
      volunteers as a prioritized work list of the 3,327 most common unknown ingredients in the UK.`,
    alter: 'The off-ingredient-linker model page on Hugging Face',
    image: OpenFoodFacts,
    ghLink: "https://github.com/Nafety/ingredient-linker",
    demoLink: "https://huggingface.co/Nafety/off-ingredient-linker",
    demoTitle: "Model on Hugging Face",
    download: false,
  },
];

// Everything else, folded under the featured projects
const others = [
  {
    title: 'Le Labo',
    tagline: 'A 3D old-fashioned, magical science lab full of general-knowledge games, for up to 4 players.',
    tags: ['Three.js', 'TypeScript', 'WebRTC', 'Wikidata'],
    alter: 'Le Labo, a 3D science lab with a globe, a library, a telescope and a magic portal',
    image: LeLabo,
    ghLink: "https://github.com/Nafety/Laboratory",
    demoLink: "https://lab.nafety.online",
  },
  {
    title: 'Spot-emoji',
    tagline: 'Music recommendations from the emotions read on your face, live.',
    tags: ['Python', 'Computer vision', 'LLM'],
    image: Spotemoji,
    ghLink: "https://github.com/Nafety/Spotemoji",
  },
  {
    title: 'Discord Bot',
    tagline: 'A community bot with an in-server economy, a stock market of items and music.',
    tags: ['Discord API', 'Economy system', 'Music'],
    image: DiscordBot,
    ghLink: "https://github.com/Nafety/Discord-bot",
  },
  {
    title: 'Portfolio Website',
    tagline: 'This website: a fast, animated portfolio built with React and Vite.',
    tags: ['React', 'Vite', 'Three.js'],
    image: Portfolio,
    ghLink: "https://github.com/Nafety/Portfolio",
    demoLink: "https://portfolio.nafety.online",
  },
];

export const Projects = () => (
  <>
    <Showcase id="projects" items={featured} />
    <OtherProjects items={others} />
  </>
);
