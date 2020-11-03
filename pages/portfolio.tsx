import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import ProjectsCarousel from 'components/ProjectsCarousel';
import ProjectCard from 'components/ProjectCard';
import { getGlobalContext } from 'lib/statestore';
import { setThisAsLoaded, searchFilter } from 'lib/util';
import { getProjects } from 'pages/api/projects';
import { ProjectsProps } from 'lib/types';

const portfolio: FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
  const searchTerms = getGlobalContext('searchTerm');
  return (
    <>
      <img src='img/portfolio2.jpg' alt='' className='background' ref={setThisAsLoaded} />
      <Layout
        page='portfolio'
        title='Portfolio'
      >
        <Container className='mt-6'>
          <Row>
            <Col xs={12} lg={{ span: 8, offset: 4 }}>
              <Row className='d-none d-sm-block'>
                <ProjectsCarousel projects={projects.filter(({ data }) => data.featured)} />
              </Row>
            </Col>
            <Col id='search-col' xs={12} lg={4}>
              <SearchBar />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 4 }}>
              <Row>
                {projects
                  .filter((project) => searchFilter(project, searchTerms))
                  .map(((project) => (
                    <Col xs={12} sm={6} xl={4} className='p-2' key={project.id}>
                      <ProjectCard project={project} />
                    </Col>
                  )
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>

  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects();
  return {
    props: { projects }
  };
};

export default portfolio;
