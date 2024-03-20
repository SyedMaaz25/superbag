import React from "react";
import { Tooltip as MTooltip } from "@mui/material";

export const Tooltip = ({ children, ...props }) => {
  return <MTooltip {...props}>{children}</MTooltip>;
};