/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from 'components/Layout';
import { experiences } from 'resume/experiences.json';
import { awards } from 'resume/awards.json';
import { languages, skills, frameworks } from 'resume/knowledge.json';
import { education } from 'resume/education.json';
import { services } from 'resume/services.json';

const resume: FC = () => (
  <Layout page='resume' title='Résumé'>
    <Container className='mt-6'>
      <Row>
        <Col xs={12} md={4}>
          <section>
            <h2>Languages</h2>
            <ul>
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Frameworks</h2>
            <ul>
              {frameworks.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Awards</h2>
            {awards.map((award) => (
              <div key={award.title}>
                <h5>{award.title}</h5>
                <h5>{award.context}</h5>
              </div>
            ))}
          </section>
        </Col>
        <Col xs={12} lg={8}>
          <section>
            <h2>Experience</h2>
            {experiences.map((experience) => (
              <div key={experience.title} className='d-flex flex-wrap flex-column flex-md-row'>
                <h5>{experience.title}</h5>
                <h5 className='ml-md-auto'>{experience.dates}</h5>
                <hr />
                <h5>{experience.company}</h5>
                <h5 className='ml-md-auto'>{experience.location}</h5>
                <hr />
                <ul>
                  {experience.bullets.map((bullet, index) => {
                    if (Array.isArray(bullet)) {
                      return (
                        <ul>
                          {bullet.map((subbullet) => (
                            <li>{subbullet}</li>
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
          <section>
            <h2>Education</h2>
            {education.map((ed) => (
              <div key={ed.school} className='d-flex flex-wrap flex-column flex-md-row'>
                <h5>{ed.degree}</h5>
                <h5 className='ml-md-auto'>{ed.graduation}</h5>
                <hr />
                <h5>{ed.school}</h5>
                <h5 className='ml-md-auto'>{ed.location}</h5>
                <hr />
                <p>GPA: {ed.gpa}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Service</h2>
            {services.map((service) => (
              <div key={service.title} className='d-flex flex-wrap flex-column flex-md-row'>
                <h5>{service.title}</h5>
                <h5 className='ml-md-auto'>{service.dates}</h5>
                <hr />
                <p>{service.summary}</p>
              </div>
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default resume;
