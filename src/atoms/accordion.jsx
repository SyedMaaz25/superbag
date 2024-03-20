import React from "react";
import { Accordion as MAccordion } from "@mui/material";
import { AccordionSummary as MAccordionSummary } from "@mui/material";
import { AccordionDetails as MAccordionDetails } from "@mui/material";

export const Accordion = ({ children, ...props }) => {
  return <MAccordion {...props}>{children}</MAccordion>;
};

export const AccordionSummary = ({ children, ...props }) => {
  return <MAccordionSummary {...props}>{children}</MAccordionSummary>;
};

export const AccordionDetails = ({ children, ...props }) => {
  return <MAccordionDetails {...props}>{children}</MAccordionDetails>;
};