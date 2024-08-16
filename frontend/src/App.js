import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Headers/Home";
import Products from "./Headers/Products";

import Cart from "./Headers/Cart";
import SingleProduct from "./Headers/SingleProduct";
// import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Footer from "./components/Footer";

// import { intitialstate, reducer } from "./reducer/UseReduucer";
// import { useContext, useReducer } from "react";

import Nav from "./components/Nav";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};
const App = () => {
  // const [state1, dispatch1] = useReducer(reducer, intitialstate);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Router> */}
      <GlobalStyle />
      {/* {!isLoginPage && <Header />} */}
      {/* <Header /> */}
      <Nav />

      <Routing />

      <Footer />
      {/* {!isLoginPage && <Footer />} */}
      {/* </Router> */}
    </ThemeProvider>
  );
};

export default App;
