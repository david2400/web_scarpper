import { AppProps } from 'next/app';
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from '@components/layout/cart.js';

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
