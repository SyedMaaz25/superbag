import React from "react";
import { Modal as MModal } from "@mui/material";

export const Modal = ({ children, open, ...props }) => {
  return (
    <MModal open={open} {...props}>
      <div>{children}</div>
    </MModal>
  );
};