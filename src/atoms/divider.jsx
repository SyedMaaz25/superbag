import React from "react";
import { Divider as MDivider } from "@mui/material";

export const Divider = ({ children, ...props }) => {
  return <MDivider {...props}>{children}</MDivider>;
};