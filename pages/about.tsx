/* eslint-disable react/jsx-one-expression-per-line */
import Link from 'next/link';
import { FC, useRef } from 'react';
import {
  Container, Row, Col, ResponsiveEmbed
} from 'react-bootstrap';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

const about: FC = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <Layout
      page='about'
      title='About'
      navChangeAfterHero
      ref={layoutRef}
    >
      <Hero
        layoutRef={layoutRef}
        imgSrc='img/about.jpg'
        imgStyles={{ objectPosition: 'top right' }}
      >
        <h3 className='display-3'>I started coding at 13...</h3>
        <h6 className='display-6'>Now I am a software engineer and IT professional in the Denver metro area.</h6>
      </Hero>
      <section id='bio' className='bg-bg1'>
        <Container>
          <Row className='justify-content-lg-center'>
            <Col lg={9}>
              <h1 className='my-4'>My coding journey</h1>
              <p>I am a software engineer based outside Denver, Colorado with a passion for understanding as much of the vast technological landscape as I can (though obviously I&apos;ll never know it all!). With my expertise, I desire to contribute to projects and companies that make a meaningful difference in the world. This website is just one such project, in which I accomplish that by sharing things I learn on my <Link href='/blog'>blog</Link>.</p>
              <p>Growing up, I was fascinated by technology. I would see a computer or video game and wonder at how so many characters had to make so many decisions based on so many factors, and how all that then had to be rendered in increasingly realistic graphics, not just once, but many times a second! How all that happened was beyond anything I could comprehend, so at the time I simply wondered and enjoyed the games.</p>
              <p>The first time programming came within my grasp was at the end of 7th grade. I had joined math team earlier that year, and at our final competition of the year one of my teamates showed me some mathematical programs he had stored on his TI-84 calculator. Inconveniently (though in the long term, quite fortunately), his calculater was incompatable with my TI-86, so rather than just copying it over to my calculator as he had done for all the others, I had to figure out how to open the program editor on mine and copy it by hand - that was my first program!</p>
              <p>I continued copying a couple programs, and became aware of general programing strategies/concepts and my calculator&apos;s specific syntax as I went. Before long, I became frustrated by everything about the programs I was copying - the poor UI, the slowness, the limited functionality - which led me to figuring out how to fix each of those things, and from then on, I was hooked. I wrote programs to solve many other mathematical problems, and even discovered some notable algorithms and theorems in the process. In high school I upgraded to a TI-89, and took my programming to the next level as I learned a slightly more advanced programming languages and unlocked new potential.</p>
              <p>Senior year of high school I took AP Computer Science, learning Java and OOP, and thereby delvinging into programming on my PC. (With OOP, I finally started to have a glimps into how those video games might have been created.) That year I also won 1st place individual in our state math contest, and placed nationally in Physics. I went on to attend Benedictine College in Atchison, Kansas, where I studied Computer Science and Mathematics. I there learned more about C programming, Assembly, Data Structures, Operating Systems, Security, Networking, Databases, SQL, and Algorithms, and did projects involving WiFi cracking, error correcting codes, and embedded systems. I was blessed to graduate in three years as valedictorian and speak at our ceremony.</p>
              <Row>
                <ResponsiveEmbed aspectRatio='16by9' className='m-3 mb-5'>
                  <iframe
                    src='https://www.youtube.com/embed/PwB2SAFUvUY'
                    frameBorder='0'
                    allowFullScreen
                    title='Augustine Calvino Valedictorian Speech'
                  />
                </ResponsiveEmbed>
              </Row>
              <p>As great as some of my accomplishments have been, it has been abundantly clear that the need to learn did not stop at graduation. I&apos;ve gone on to teach myself web development, data analysis, and their associated programming languages (HTML, CSS, Javascript, PHP, Ruby, Python, and R) on the side (topics that we did not cover in school). On the job I&apos;ve found that it&apos;s a never ending process of learning new technologies (in my case this includes Hadoop & Linux administration) or the more advanced features of old ones, not to mention business-specific logic and terminology.</p>
              <p>It is a long learning process, but I enjoy the frustration, thrill, and satisfaction that comes throughout the process of difficult problem solving. I strive for an expertise accross the technology stack that will lead to creating the best and most maintainable solutions. And above all I seek to use my gifts to serve others with excellence work.</p>
              <h1 className='my-4'>Beyond Coding</h1>
              <p>Outside of coding I love to play sports, especially soccer and ultimate, to hike and camp in the beautiful mountains outside Denver, to play music (saxaphone, guitar, flute, and piano), and to enjoy the company of the wonderful people here in Denver. I am passionate about volunteering, and about my Catholic faith that leads me to living a full life in service of others.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default about;
