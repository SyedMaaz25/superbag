import { createSlice } from "@reduxjs/toolkit";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const initialState = [
  {
    id: 1,
    Icon: LocalPhoneOutlinedIcon,
    name: "+(0) 066668888",
    to: "tel:03377078631",
  },
  {
    id: 2,
    Icon: EmailOutlinedIcon,
    name: "minimog@thememove.com",
    to: "mailto:minimog@thememove.com",
  },
];

export const contactInfo = createSlice({
  name: "contact",
  initialState,
});

export default contactInfo.reducer;