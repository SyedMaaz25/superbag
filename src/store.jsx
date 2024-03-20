import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/feautures/product_slice";
import contactReducer from "./components/feautures/contact_Info";
import languageSlice from "./components/feautures/language_slice";
import navigationSlice from "./components/feautures/navigation_slice";
import heroReducer from "./components/feautures/hero_slice";
import cartReducer from "./components/feautures/cart_slice";
import accordionReducer from "./components/feautures/accordion_slice";
import bannerReducer from "./components/feautures/banner_slice";
import reviewReducer from "./components/feautures/review_slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    contact: contactReducer,
    language: languageSlice,
    navigation: navigationSlice,
    hero: heroReducer,
    cart: cartReducer,
    accordion: accordionReducer,
    banner: bannerReducer,
    reviews: reviewReducer,
  },
});