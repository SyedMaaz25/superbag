import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: {},
  buttonValue: "Submit Now",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { productId, review } = action.payload;
      state.review[productId] = [...(state.review[productId] || []), review];
      state.buttonValue = "Submit Now";
    },
    deleteReview: (state, action) => {
      const { productId, id } = action.payload;
      state.review[productId] = state.review[productId].filter(
        (_, index) => index !== id
      );
    },
    removeAllReview: (state, action) => {
      const { productId } = action.payload;
      state.review[productId] = [];
    },
    updateReview: (state, action) => {
      if (state.buttonValue === "Update Now") {
        state.buttonValue = "Submit Now";
      } else {
        state.buttonValue = "Update Now";
      }
    },
  },
});

export const { addReview, deleteReview, removeAllReview, updateReview } =
  reviewSlice.actions;
export default reviewSlice.reducer;