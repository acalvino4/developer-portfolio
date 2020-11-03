import { FC, useRef, useCallback } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronDown, faTools, faListUl, faPenAlt, faHiking
} from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout';
import { getGlobalContext } from 'lib/statestore';
import { setThisAsLoaded } from 'lib/util';
import { Button } from 'react-bootstrap';
import IndexSection from 'components/IndexSection';

const home: FC = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const navHeight = getGlobalContext('navHeight');

  const scrollToContent = useCallback(() => {
    layoutRef.current?.scrollTo({
      top: window.innerHeight - navHeight,
      behavior: 'smooth'
    });
  }, []);
  return (
    <Layout
      page='index'
      title='Developer Portfolio'
      ref={layoutRef}
    >
      <section id='hero' className='vh-100'>
        <img src='img/index.jpg' alt='' className='background' ref={setThisAsLoaded} />
        <div className='position-absolute hero-block text-light top-sm-50 left-0 left-xl-8 right-0 right-md-auto bottom-0 bottom-md-auto pt-3 pt-md-2 pl-4 pl-lg-5 pr-4 pr-lg-5 d-flex flex-column'>
          <h2 className='display-2'>Augustine Calvino</h2>
          <h5 className='display-5'><em>Denver, CO</em></h5>
          <h4 className='display-4'>Full Stack Software Engineer</h4>
          <div className='my-md-5 py-4 py-md-0 flex-grow-1 d-flex align-items-center justify-content-center'>
            <FAI
              icon={faChevronDown}
              size='3x'
              onClick={scrollToContent}
            />
          </div>
        </div>
      </section>
      <IndexSection
        id='projects'
        left={(
          <>
            <h2 className='mb-3'>I have coded some cool things...</h2>
            <Link href='/portfolio' passHref>
              <Button variant='outline-light' className='my-1'>View Portfolio</Button>
            </Link>
          </>
        )}
        right={(<FAI icon={faTools} size='5x' />)}
        bgColor='bg2'
      />
      <IndexSection
        id='resume'
        left={(<FAI icon={faListUl} size='5x' />)}
        right={(
          <>
            <h2 className='mb-3'>I have studied and worked at some cool places...</h2>
            <Link href='/resume' passHref>
              <Button variant='outline-light' className='my-1'>View Resume</Button>
            </Link>
          </>
        )}
        bgColor='bg1'
      />
      <IndexSection
        id='blog'
        left={(
          <>
            <h2 className='mb-3'>I like to share what I learn...</h2>
            <Link href='/blog' passHref>
              <Button variant='outline-light' className='my-1'>View Blog</Button>
            </Link>
          </>
        )}
        right={(<FAI icon={faPenAlt} size='5x' />)}
        bgColor='bg2'
      />
      <IndexSection
        id='about'
        left={(<FAI icon={faHiking} size='5x' />)}
        right={(
          <>
            <h2 className='mb-3'>I am more than a coder...</h2>
            <Link href='/about' passHref>
              <Button variant='outline-light' className='my-1'>View Bio</Button>
            </Link>
          </>
        )}
        bgColor='bg3'
      />
      <IndexSection
        id='contact'
        left={(
          <>
            <h2 className='mb-3'>I am ready for more coding adventures...</h2>
            <Link href='/contact' passHref>
              <Button variant='light' className='my-1'>Contact Me </Button>
            </Link>
          </>
        )}
        right={(<FAI icon={faAddressCard} size='5x' />)}
        bgColor='bg2'
      />
    </Layout>
  );
};

export default home;
