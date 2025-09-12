import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDF from './../../assets/CV.pdf';
import { ResumeIcon } from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '&:hover': {
    },
    transition: 'all 0.5s ease',
  },
  resumeText: {
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
  },
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerText}>
      <ResumeIcon href={ResumePDF} />
      <Typography
        component='a'
        href={ResumePDF}
        target='_blank'
        rel='noopener noreferrer'
        className={classes.resumeText}
      >
      </Typography>
    </div>
  );
};
