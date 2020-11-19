/* eslint-disable react/jsx-one-expression-per-line */
import { FC, useRef } from 'react';
import {
  Container, Row, Col, Button
} from 'react-bootstrap';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

import { experiences } from 'resume/experiences.json';
import { awards } from 'resume/awards.json';
import { languages, skills, frameworks } from 'resume/knowledge.json';
import { education } from 'resume/education.json';
import { services } from 'resume/services.json';

const resume: FC = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <Layout
      page='resume'
      title='Résumé'
      navChangeAfterHero
      ref={layoutRef}
    >
      <Hero
        layoutRef={layoutRef}
        imgSrc='img/resume.jpg'
      >
        <h3 className='display-3'>See what I have done</h3>
        <a href='Resume_AugustineCalvino.pdf' download className='mx-auto'>
          <Button variant='outline-light' className='mt-3'>Download pdf resume</Button>
        </a>
      </Hero>
      <section id='resume-content' className='bg-bg1'>
        <Container className='pt-1'>
          <h1 className='my-4'>Résumé</h1>
          <Row>
            <Col xs={12} lg={4} className='pl-sm-8 pl-md-3'>
              <Row>
                <Col xs={12} md={6} lg={12}>
                  <section className='resume-section'>
                    <h2>Languages</h2>
                    <ul>
                      {languages.map((language) => (
                        <li key={language}>{language}</li>
                      ))}
                    </ul>
                  </section>
                  <section className='resume-section'>
                    <h2>Skills</h2>
                    <ul>
                      {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </section>
                </Col>
                <Col xs={12} md={6} lg={12}>
                  <section className='resume-section'>
                    <h2>Frameworks</h2>
                    <ul>
                      {frameworks.map((framework) => (
                        <li key={framework}>{framework}</li>
                      ))}
                    </ul>
                  </section>
                  <section className='resume-section'>
                    <h2>Awards</h2>
                    {awards.map((award) => (
                      <div key={award.title}>
                        <h6><b>{award.title}</b></h6>
                        <h6><em>{award.context}</em></h6>
                      </div>
                    ))}
                  </section>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={8}>
              <section className='resume-section'>
                <h2>Experience</h2>
                {experiences.map((experience) => (
                  <div key={experience.title} className='d-flex flex-wrap flex-column flex-sm-row resume-block'>
                    <h5><b>{experience.title}</b></h5>
                    <h5 className='ml-sm-auto'>{experience.dates}</h5>
                    <hr />
                    <h5><em>{experience.company}</em></h5>
                    <h5 className='ml-sm-auto d-none d-sm-block'><em>{experience.location}</em></h5>
                    <hr />
                    <ul>
                      {experience.bullets.map((bullet) => {
                        if (Array.isArray(bullet)) {
                          return (
                            <ul key={bullet[0].substring(0, 16)}>
                              {bullet.map((subbullet) => (
                                <li key={subbullet.substring(0, 16)}>{subbullet}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <li key={bullet.substring(0, 16)}>{bullet}</li>;
                      })}
                    </ul>
                  </div>
                ))}
              </section>
              <section className='resume-section'>
                <h2>Education</h2>
                {education.map((ed) => (
                  <div key={ed.school} className='d-flex flex-wrap flex-column flex-sm-row resume-block'>
                    <h5><b>{ed.degree}</b></h5>
                    <h5 className='ml-sm-auto'>{ed.graduation}</h5>
                    <hr />
                    <h5><em>{ed.school}</em></h5>
                    <h5 className='ml-sm-auto d-none d-sm-block'><em>{ed.location}</em></h5>
                    <hr />
                    <p>GPA: {ed.gpa}</p>
                  </div>
                ))}
              </section>
              <section className='resume-section'>
                <h2>Service</h2>
                {services.map((service) => (
                  <div key={service.title} className='d-flex flex-wrap flex-column flex-sm-row resume-block'>
                    <h5><b>{service.title}</b></h5>
                    <h5 className='ml-sm-auto'>{service.dates}</h5>
                    <hr />
                    <p>{service.summary}</p>
                  </div>
                ))}
              </section>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  );
};

export default resume;
