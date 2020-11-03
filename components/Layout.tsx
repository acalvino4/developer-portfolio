/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  PropsWithChildren, forwardRef, useCallback, useRef, useEffect
} from 'react';
import Head from 'next/head';
import { throttle } from 'lodash';
import { setGlobalContext } from 'lib/statestore';
import { closeNav } from 'lib/util';
import composeRefs from '@seznam/compose-react-refs';
import MainNav from './MainNav';
import Footer from './Footer';

type LayoutProps = PropsWithChildren<{
  page: string,
  title: string,
  scrollHandler?: (...args: any) => any
}>;

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({
  children, page, title, scrollHandler
}: LayoutProps, ref) => {
  const divref = useRef<HTMLDivElement>(null);
  const setNavOpacity = setGlobalContext('navOpacity');
  const defaultScrollHandler = useCallback(() => {
    const scrollPos = divref.current?.scrollTop || 0;
    let newNavOpacity: number;
    if (scrollPos === 0) {
      newNavOpacity = 0;
    } else {
      newNavOpacity = 75;
    }
    setNavOpacity(newNavOpacity);
  }, []);
  useEffect(() => {
    if (scrollHandler) {
      scrollHandler();
    } else {
      defaultScrollHandler();
    }
  }, [page]);

  return (
    <div
      id={page}
      className='d-flex flex-column vh-100 overflow-auto'
      onScroll={throttle(scrollHandler || defaultScrollHandler, 250)}
      ref={composeRefs(ref, divref)}
    >
      <Head>
        <title>{`${title} - Augustine Calvino`}</title>
      </Head>
      <MainNav page={page} />
      <main
        className='flex-grow-1'
        onClick={closeNav('nav-toggler')}
        onKeyPress={closeNav('nav-toggler')}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
