import { FC } from 'react';
import {
  Container, Row, Col, ResponsiveEmbed
} from 'react-bootstrap';
import Layout from 'components/Layout';
import ComponentizedMarkdown from 'components/ComponentizedMarkdown';
import { getPosts } from 'pages/api/posts';
import { GetStaticPropsContext } from 'next';
import { getPost } from 'pages/api/posts/[postId]';
import { PostProps } from 'lib/types';

const Post: FC<PostProps> = ({ post: { id, data, content } }: PostProps) => (
  <Layout page={id} title={data.title}>
    <Container className='mt-6'>
      <Row className='justify-content-lg-center'>
        <Col lg={9}>
          <h1>{data.title}</h1>
          <p className='text-muted'><em>{data.date}</em></p>
          <ResponsiveEmbed aspectRatio='21by9'>
            <img src={`/img/posts/${id}.jpg`} alt={id} />
          </ResponsiveEmbed>
          <ComponentizedMarkdown markdown={content || ''} />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export async function getStaticPaths() {
  const posts = getPosts();
  const paths = posts.map(({ id }) => ({
    params: { postId: id }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{postId: string}>) {
  const postId = params?.postId;
  const post = getPost(postId);
  return post ? { props: { post } } : undefined;
}

export default Post;
