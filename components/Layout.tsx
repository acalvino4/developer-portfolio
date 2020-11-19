/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  PropsWithChildren, forwardRef, useCallback, useRef, useEffect
} from 'react';
import Head from 'next/head';
import { throttle } from 'lodash';
import { closeNav, useScrollHandler } from 'lib/util';
import composeRefs from '@seznam/compose-react-refs';
import MainNav from './MainNav';
import Footer from './Footer';

type LayoutProps = PropsWithChildren<{
  page: string
  title: string
  navChangeAfterHero?: boolean
}>;

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({
  children, page, title, navChangeAfterHero = false
}: LayoutProps, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  const scrollHandler = useCallback(useScrollHandler(divRef, navChangeAfterHero), [page]);
  useEffect(() => {
    scrollHandler();
  }, [page]);

  return (
    <div
      id={page}
      className='d-flex flex-column vh-100 overflow-auto'
      onScroll={throttle(scrollHandler, 250)}
      ref={composeRefs(ref, divRef)}
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
