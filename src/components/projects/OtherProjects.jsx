import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";

import './OtherProjects.css';

const useStyles = makeStyles((theme) => ({
  tag: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  toggle: {
    color: theme.palette.text.primary,
    // nearly opaque: the animated background sphere passes behind
    backgroundColor: alpha(theme.palette.background.default, 0.85),
    '&:hover': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  card: {
    backgroundColor: alpha(theme.palette.background.default, 0.9),
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  link: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  placeholder: {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

/** More projects, folded by default: a compact card for each (thumbnail, one line, tags, links). */
export const OtherProjects = ({ items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className="op-section">
      <div className="op-header">
        <h3 className="op-heading">Other projects</h3>
        <button
          className={`op-toggle ${classes.toggle}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="other-projects"
        >
          {open ? 'Show less' : `Show ${items.length} more projects`}
          <HiChevronDown className={`op-chevron${open ? ' open' : ''}`} />
        </button>
      </div>

      {open && (
        <ul className="op-grid" id="other-projects">
          {items.map((item) => (
            <li key={item.title} className={`op-card ${classes.card}`}>
              <div className="op-thumb">
                {item.image ? (
                  <img src={item.image} alt={item.alter || item.title} loading="lazy" />
                ) : (
                  <div className={`op-placeholder ${classes.placeholder}`}>{item.title}</div>
                )}
              </div>
              <div className="op-body">
                <h4 className="op-title">{item.title}</h4>
                <p className="op-tagline">{item.tagline}</p>
                <ul className="op-tags">
                  {item.tags.map((t) => (
                    <li key={t} className={classes.tag}>{t}</li>
                  ))}
                </ul>
                <div className="op-links">
                  {item.ghLink && (
                    <a className={classes.link} href={item.ghLink} target="_blank" rel="noopener noreferrer">
                      <BsGithub /> Code
                    </a>
                  )}
                  {item.demoLink && (
                    <a className={classes.link} href={item.demoLink} target="_blank" rel="noopener noreferrer">
                      <CgWebsite /> Live
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
