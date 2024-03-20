import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [
    {
      id: 1,
      page: "Home",
      to: "/",
    },
    {
      id: 2,
      page: "Shop",
      to: "/shop",
    },
    {
      id: 3,
      page: "Products",
      to: "/",
    },
  ],
  others: [
    {
      id: 1,
      page: "blog",
      to: "/blog",
    },
    {
      id: 2,
      page: "pages",
      to: "/",
      icon: "",
      dropDown: [
        { id: 1, page: "about", to: "/about" },
        { id: 2, page: "contact", to: "/contact" },
      ],
    },
  ],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
});

export default navigationSlice.reducer;