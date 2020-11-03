import { FC } from 'react';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import {
  Container, Row, Col, Button, ResponsiveEmbed
} from 'react-bootstrap';
import Layout from 'components/Layout';
import ComponentizedMarkdown from 'components/ComponentizedMarkdown';
import { getProjects } from 'pages/api/projects/index';
import { getProject } from 'pages/api/projects/[projectId]';
import { ProjectProps } from 'lib/types';

const Project: FC<ProjectProps> = ({ project: { id, data, content } }: ProjectProps) => (
  <Layout page={id} title={data.heading}>
    <Container className='mt-6'>
      <Row className='justify-content-lg-center'>
        <Col lg={9}>
          <h1 className='mb-3'>{data.heading}</h1>
          <h3 className='mb-3'>{data.subHeading}</h3>
          <ResponsiveEmbed aspectRatio='21by9' className='mb-3'>
            <img src={`/img/projects/${id}.jpg`} alt={id} />
          </ResponsiveEmbed>
          <Row className='my-3'>
            <Col xs={12} md={8}>
              <Link href={data.viewLink} passHref>
                <Button variant='outline-light' className='mr-3'>{`View ${data.type}`}</Button>
              </Link>
              <Link href={data.sourceLink} passHref>
                <Button variant='outline-light' className='mr-3'>View Source</Button>
              </Link>
              <div className='my-3'>
                <ComponentizedMarkdown markdown={content || ''} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <h3>Technologies</h3>
              <ul>
                {data.technologies.split(' ').map((item) => (<li key={item}>{item.replace('-', ' ')}</li>))}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export async function getStaticPaths() {
  const projects = getProjects();
  const paths = projects.map(({ id }) => ({
    params: { projectId: id }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{projectId: string}>) {
  const projectId = params?.projectId;
  const project = getProject(projectId);
  return project ? { props: { project } } : undefined;
}

export default Project;
