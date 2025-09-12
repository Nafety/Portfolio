/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let found = false;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id } = sections[i];
        if (id === 'home') {
          const sectionTop = 0;
          const nextSectionTop = document.querySelector(`#${sections[i + 1].id}`).offsetTop || window.innerHeight;
          if (scrollPos >= sectionTop && scrollPos < nextSectionTop) {
            setActiveNav('home');
            found = true;
            break;
          }
        } else {
          const section = document.querySelector(`#${id}`);
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              setActiveNav(id);
              found = true;
              break;
            }
          }
        }
      }

      // Si on est tout en bas de la page, activer la dernière section
      if (!found && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveNav('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={id === 'home' ? '#' : `#${id}`}
          className={activeNav === id ? 'active' : ''}
          onClick={() => setActiveNav(id)}
        >
          <Typography>{label}</Typography>
        </a>
      ))}
    </nav>
  );
};
