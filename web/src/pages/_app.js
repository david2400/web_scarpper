import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import Document, { Html, Head, Main, NextScript } from "next/document";
import CartProvider from "@components/layout/cart.js";
import Foot from "@components/footer/foot.js";
import Nav from "@common/nav";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <CartProvider>
      <Nav></Nav>
      <Component {...pageProps} />
      <Foot />
    </CartProvider>
  );
};

export default MyApp;
