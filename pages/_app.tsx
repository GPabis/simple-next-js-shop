
import type { AppProps } from 'next/app';
import {UserProvider} from '@auth0/nextjs-auth0';
import Header from '../components/header/Header';
import '../styles/global.scss';
import '../styles/whislhist.scss';
import CartContextProvider from '../store/cart-context';

function MyApp({ Component, pageProps }: AppProps) {
  return <UserProvider>
    <CartContextProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </CartContextProvider>
</UserProvider>
}
export default MyApp
