import { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';
import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import SearchBar from 'components/SearchBar';
import { setThisAsLoaded } from 'lib/util';
import { getPosts } from 'pages/api/posts';
import { PostsProps } from 'lib/types';

const blog: FC<PostsProps> = ({ posts }: PostsProps) => (
  <>
    <img src='img/blog.jpg' alt='' className='background' ref={setThisAsLoaded} />
    <Layout
      page='blog'
      title='Blog'
    >
      <Container className='mt-6'>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 4 }}>
            <div className='mb-4'>
              <h1>Blog</h1>
              <h4>This is where I share about technical challenges I have worked though, for the benefit of my future self, as well as any others who happen to stumble by.</h4>
            </div>
          </Col>
          <Col id='search-col' xs={12} lg={4}>
            <SearchBar />
          </Col>
          <Col xs={12} lg={{ span: 8, offset: 4 }}>
            {posts.map((post) => (
              <Link href={`/blog/${post.id}`} passHref key={post.id}>
                <a><PostCard post={post} /></a>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: { posts }
  };
};

export default blog;
