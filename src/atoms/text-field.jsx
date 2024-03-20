import React from "react";
import { TextField as MTextField } from "@mui/material";

export const TextField = ({ children, ...props }) => {
  return <MTextField {...props}>{children}</MTextField>;
};