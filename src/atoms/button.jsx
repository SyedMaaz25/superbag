import React from "react";
import { Button as Mbutton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    background:`${theme.palette.text.secondary} !important`,
    color:`${theme.palette.text.main} !important`,
    fontFamily:"PoppinsMedium !important",
    padding:`${theme.spacing(1.50,0)} !important`,
    boxShadow:"none !Important",
    "&:hover":{
    background:`${theme.palette.text.main} !important`,
    color:`${theme.palette.text.secondary} !important`,
    }
  },
  secondaryButton: {
    background:`${theme.palette.text.main} !important`,
    color:`${theme.palette.text.secondary} !important`,
    fontFamily:"PoppinsMedium !important",
    padding:`${theme.spacing(1.20,0)} !important`,
    boxShadow:"none !Important",
    "&:hover":{
      border:`1px solid ${theme.palette.text.main} !important`,
      background:`none !important`,
      color:`${theme.palette.text.main} !important`,
    }
  },
  accentButton: {
    border:`1px solid ${theme.palette.text.main} !important`,
    background:`none !important`,
    color:`${theme.palette.text.main} !important`,
    fontFamily:"PoppinsMedium !important",
    padding:`${theme.spacing(1,0)} !important`,
    boxShadow:"none !Important",
    "&:hover":{
      background:`${theme.palette.text.main} !important`,
      color:`${theme.palette.text.secondary} !important`,
      }
  },
}));

export const Button = ({ children, variant, ...props }) => {
  const classes = useStyles();
  const buttonClass =
    variant === "primary"
      ? classes.primaryButton
      : variant === "secondary"
      ? classes.secondaryButton
      : variant === "accent"
      ? classes.accentButton
      : "";

  return (
    <Mbutton variant="contained" className={buttonClass} {...props}>
      {children}
    </Mbutton>
  );
};