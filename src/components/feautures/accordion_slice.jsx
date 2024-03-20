import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [
    {
      id: 1,
      title: "Direct bank transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: 2,
      title: "Check payments",
      description:
        "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    },
    {
      id: 3,
      title: "Cash on delivery",
      description: "Pay with cash upon delivery.",
    },
  ],
  selectedPayment: null,
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    selectPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },
  },
});

export const { selectPayment } = accordionSlice.actions;
export default accordionSlice.reducer;