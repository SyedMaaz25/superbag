import { createSlice } from "@reduxjs/toolkit";
import slide1 from "../../assets/images/hero/backpack-slide-01.jpg";
import slide2 from "../../assets/images/hero/backpack-slide-02.jpg";
import slide3 from "../../assets/images/hero/backpack-slide-03.jpg";

const initialState = [
  {
    id: 1,
    image: slide3,
    subTitle: "Gym Collection",
    titlle: "Duffel pack",
    description:
      "Shapes & proportions are  for your intellect. I've treated the wastcoat as if it were a corset.",
  },
  {
    id: 2,
    image: slide1,
    subTitle: "Gym Collection",
    titlle: "Duffel pack",
    description:
      "Shapes & proportions are  for your intellect. I've treated the wastcoat as if it were a corset.",
  },
  {
    id: 3,
    image: slide2,
    subTitle: "Gym Collection",
    titlle: "Duffel pack",
    description:
      "Shapes & proportions are  for your intellect. I've treated the wastcoat as if it were a corset.",
  },
];

const heroSlice = createSlice({
  name: "hero",
  initialState,
});

export default heroSlice.reducer;