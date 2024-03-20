import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./theme";
import { Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./routes/Home";
import SingleCoreEssentials from "./components/home/single-core-essentials";
import Checkout from "./components/home/checkout";
import Shop from "./components/shop"
import Error from "./routes/Error";

const App = () => {

  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/core-essentials/:id"  element={<SingleCoreEssentials/>} />
          <Route path="/checkout"  element={<Checkout/>} />
          <Route path="/shop"  element={<Shop/>} />
          <Route path="*"  element={<Error/>} />
        </Routes> 
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;