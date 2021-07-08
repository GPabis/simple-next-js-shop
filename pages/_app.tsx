
import type { AppProps } from 'next/app';
import {UserProvider} from '@auth0/nextjs-auth0';
import Header from '../components/header/Header';
import '../styles/global.scss';
import '../styles/whislhist.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <UserProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
</UserProvider>
}
export default MyApp
