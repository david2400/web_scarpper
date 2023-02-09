import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import Document, { Html, Head, Main, NextScript } from "next/document";
import CartProvider from "@components/layout/cart.js";
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
     
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
