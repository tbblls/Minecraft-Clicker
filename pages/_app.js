import '../styles/global.css';
import TopNav from '../components/TopNav';
import { GlobalStateProvider } from '../state';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <TopNav />
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
