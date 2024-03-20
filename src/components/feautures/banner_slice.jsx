import { createSlice } from "@reduxjs/toolkit";
import banner1 from "../../assets/images/banner/backpack-banner-1.webp";
import banner2 from "../../assets/images/banner/backpack-banner-2.webp";
import banner3 from "../../assets/images/banner/backpack-banner-3.webp";
import banner4 from "../../assets/images/banner/backpack-banner-4.webp";
import banner5 from "../../assets/images/banner/backpack-banner-5.webp";

const initialState = [
  {
    id: 1,
    title: "Travel Bag",
    image: banner2,
  },
  {
    id: 2,
    title: "Work Bag",
    image: banner3,
  },
  {
    id: 3,
    title: "Sling Bag",
    image: banner1,
  },
  {
    id: 4,
    title: "Sling Bag",
    image: banner4,
    subTitle:"New-in"
  },
  {
    id: 5,
    title: "Sling Bag",
    subTitle:"New-in",
    image: banner5,
  },
];

export const contactInfo = createSlice({
  name: "banner",
  initialState,
});

export default contactInfo.reducer;