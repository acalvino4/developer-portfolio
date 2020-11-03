import { FC, useEffect } from 'react';
import 'styles/all.scss';
import { AppProps } from 'next/app';
import { GlobalProvider } from 'lib/statestore';
import { closeNav } from 'lib/util';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (window) {
      window.addEventListener('resize', closeNav('nav-toggler'));
    }
  }, []);
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default App;
