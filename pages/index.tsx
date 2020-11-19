import { FC, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import {
  faTools, faListUl, faPenAlt, faHiking
} from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import { Button } from 'react-bootstrap';
import IndexSection from 'components/IndexSection';
import IndexSection2 from 'components/IndexSection2';

const home: FC = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <Layout
      page='index'
      title='Developer Portfolio'
      navChangeAfterHero
      ref={layoutRef}
    >
      <Hero
        layoutRef={layoutRef}
        imgSrc='img/index.jpg'
      >
        <h2 className='display-2'>Augustine Calvino</h2>
        <h5 className='display-5'><em>Denver, CO</em></h5>
        <h4 className='display-4'>Full Stack Software Engineer</h4>
      </Hero>
      <IndexSection2 id='projects' bgColor='bg2' iconSide='left'>
        {[
          <>
            <h2 className='mb-3'>I have coded some cool things...</h2>
            <Link href='/portfolio' passHref>
              <Button variant='outline-light' className='my-1'>View Portfolio</Button>
            </Link>
          </>,
          <FAI icon={faTools} size='5x' />
        ]}
      </IndexSection2>
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
