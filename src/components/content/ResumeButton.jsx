import React from "react";
import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '1.25rem',// couleur selon thème
  },
}));

export const ResumeIcon = ({ href }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Resume" placement="top" TransitionComponent={Zoom}>
      <IconButton
        color="inherit"
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.iconButton}
      >
        <i className={`fa-duotone fa-regular fa-file ${classes.icon}`}></i>
      </IconButton>
    </Tooltip>
  );
};
