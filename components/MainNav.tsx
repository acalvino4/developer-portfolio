import {
  FC, useCallback, useEffect, useRef, useState
} from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import { NavbarProps } from 'react-bootstrap/Navbar';
import composeRefs from '@seznam/compose-react-refs';
import { setGlobalContext, getGlobalContext } from 'lib/statestore';
import { modOpacity } from 'lib/util';

interface MainNavProps extends NavbarProps {
  page: string
}

const MainNav: FC<MainNavProps> = ({ page }: MainNavProps) => {
  const navInvisible = getGlobalContext('navInvisible');
  const navbarRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (navbarRef.current) {
      const color = window.getComputedStyle(navbarRef.current).backgroundColor;
      const opacity = expanded || !navInvisible ? 75 : 0;
      const newColor = modOpacity(color, opacity);
      navbarRef.current.style.backgroundColor = newColor;
    }
  }, [navInvisible, expanded]);

  const setNavHeight = setGlobalContext('navHeight');
  const measuredRef = useCallback((node: HTMLElement) => {
    if (node) {
      setNavHeight(node.clientHeight);
    }
  }, []);

  const toggleHandler = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <Navbar
      fixed='top'
      id='main-navbar'
      variant='dark'
      expand='md'
      className='flex-shrink-0'
      ref={composeRefs(measuredRef, navbarRef)}
      onToggle={toggleHandler}
    >
      <Link href='/' passHref>
        <Navbar.Brand>
          <img
            src='/logo.png'
            alt='my logo'
            width='30'
            height='30'
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='main-nav' id='nav-toggler' />
      <Navbar.Collapse id='main-nav'>
        <Nav className='ml-auto' activeKey={`/${page}`}>
          <Link href='/portfolio' passHref><Nav.Link>Portfolio</Nav.Link></Link>
          <Link href='/resume' passHref><Nav.Link>Résumé</Nav.Link></Link>
          <Link href='/blog' passHref><Nav.Link>Blog</Nav.Link></Link>
          <Link href='/about' passHref><Nav.Link>About</Nav.Link></Link>
          <Link href='/contact' passHref><Nav.Link>Contact</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
