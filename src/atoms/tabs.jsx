import React from "react";
import { Tabs as MTabs } from "@mui/material/Tabs";
import { Tab as MTab } from "@mui/material/Tab";

export const Tabs = ({ children, value, index, ...props }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      <MTabs {...props}>{children}</MTabs>
    </div>
  );
};

export const Tab = ({ children, ...props }) => {
  return <MTab {...props}>{children}</MTab>;
};