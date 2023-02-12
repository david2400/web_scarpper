// import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from '@components/layout/cart.js';
import Foot from '@components/footer/foot.js';
import Nav from '@common/nav';
import { useEffect } from 'react';
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap');
  // }, []);
  return (
    <CartProvider>
      <Nav />
      <Component {...pageProps} />
      <Foot />
    </CartProvider>
  );
};

export default MyApp;
