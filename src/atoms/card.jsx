import React from "react";
import { Card as MCard } from "@mui/material";
import { CardContent as MCardContent } from "@mui/material";
import { CardActions as MCardActions } from "@mui/material";

export const Card = ({ children, ...props }) => {
  return <MCard {...props}>{children}</MCard>;
};

export const CardContent = ({ children, ...props }) => {
  return <MCardContent {...props}>{children}</MCardContent>;
};

export const CardActions = ({ children, ...props }) => {
  return <MCardActions {...props}>{children}</MCardActions>;
};