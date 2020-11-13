import { FC, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type IndexSection = {
  id: string,
  left: ReactNode,
  right: ReactNode,
  bgColor?: string
};

const IndexSection: FC<IndexSection> = ({
  id, left, right, bgColor
}: IndexSection) => (
  <section id={id} className={`bg-${bgColor}`}>
    <Container className='py-7'>
      <Row className='justify-content-lg-center'>
        <Col
          xs={12}
          sm={6}
          xl={5}
          className='d-flex flex-column align-items-center justify-content-center'
        >
          {left}
        </Col>
        <Col xs={12} sm={6} xl={5} className='d-flex flex-column align-items-center justify-content-center'>
          {right}
        </Col>
      </Row>
    </Container>
  </section>
);

IndexSection.defaultProps = {
  bgColor: 'bg1'
};

export default IndexSection;
