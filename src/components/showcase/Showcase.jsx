import React, { useState } from "react";
import { Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi";

import './Showcase.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
  iconButton: {
    height: '2.5rem',
    width: '4.5rem',
    display: 'block',
  },
  icon: {
    fontSize: '1.25rem',
  },
  tag: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  seeMoreBtn: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    border: 'none',
    background: 'none',
    padding: 0,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

/** Adresse affichée dans la barre du faux navigateur : un libellé, sinon le domaine du lien principal. */
const frameLabel = (item) => {
  if (item.label) return item.label;
  const url = item.demoLink || item.ghLink;
  if (!url) return '';
  try {
    const u = new URL(url);
    return u.hostname + (u.hostname === 'github.com' ? u.pathname : '');
  } catch {
    return '';
  }
};

const LinkButton = ({ href, title, download, children, className }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" underline="none" download={download}>
    <Tooltip title={title} placement="top" TransitionComponent={Zoom}>
      <IconButton className={className}>{children}</IconButton>
    </Tooltip>
  </Link>
);

/**
 * Liste de projets ou d'expériences : une capture dans un cadre de navigateur et une fiche,
 * en alternance gauche / droite.
 */
export const Showcase = ({ id, items }) => {
  const classes = useStyles();
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (itemId) => {
    setExpandedIds((prev) =>
      prev.includes(itemId) ? prev.filter((x) => x !== itemId) : [...prev, itemId]
    );
  };

  return (
    <section id={id}>
      <Container component="main" className={classes.main} maxWidth="md">
        {items.map((item, index) => {
          const isExpanded = expandedIds.includes(item.id);
          return (
            <article className={`sc-item${index % 2 ? ' sc-reverse' : ''}`} key={item.id}>
              <div className="sc-frame">
                <div className="sc-frame-bar">
                  <span className="sc-dot" />
                  <span className="sc-dot" />
                  <span className="sc-dot" />
                  <span className="sc-url">{frameLabel(item)}</span>
                </div>
                <div className="sc-shot">
                  <img src={item.image} alt={item.alter} loading="lazy" />
                </div>
              </div>

              <div className="sc-card">
                <h3 className="sc-title">
                  <TextDecrypt text={`${index + 1}. ${item.title}`} />
                </h3>
                {item.tagline && <p className="sc-tagline">{item.tagline}</p>}
                {item.tags && (
                  <ul className="sc-tags">
                    {item.tags.map((t) => (
                      <li key={t} className={classes.tag}>{t}</li>
                    ))}
                  </ul>
                )}

                <p className={`sc-description${isExpanded ? ' expanded' : ''}`}>{item.description}</p>
                <button className={classes.seeMoreBtn} onClick={() => toggleExpand(item.id)}>
                  {isExpanded ? 'See less' : 'See more'}
                </button>

                <div className="sc-buttons">
                  {item.ghLink && (
                    <LinkButton href={item.ghLink} title="GitHub Repository" className={classes.iconButton}>
                      <BsGithub className={classes.icon} />
                    </LinkButton>
                  )}
                  {item.demoLink && (
                    <LinkButton
                      href={item.demoLink}
                      title={item.demoTitle || (item.download ? "Download Link" : "Live Demo")}
                      download={item.download}
                      className={classes.iconButton}
                    >
                      <CgWebsite className={classes.icon} />
                    </LinkButton>
                  )}
                  {item.reportLink && (
                    <LinkButton href={item.reportLink} title="Project Report" className={classes.iconButton}>
                      <HiOutlineDocumentText className={classes.icon} />
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
};
