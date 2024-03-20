import { createSlice } from "@reduxjs/toolkit";
import france from "../../assets/images/france.webp";
import deutch from "../../assets/images/deutch.webp";

const initialState = [
  {
    id: 1,
    image: deutch,
    name: "Deutsch",
  },
  {
    id: 2,
    image: france,
    name: "France",
  },
];

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
});

export default languageSlice.reducer;