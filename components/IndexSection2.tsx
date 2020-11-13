import { FC, PropsWithChildren, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type IndexSection = PropsWithChildren<{
  id: string
  iconSide: 'left' | 'right'
  bgColor?: string
  children: ReactNode[]
}>;

const IndexSection: FC<IndexSection> = ({
  id, bgColor, iconSide, children
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
          {children[0]}
        </Col>
        <Col xs={12} sm={6} xl={5} className='d-flex flex-column align-items-center justify-content-center'>
          {children[1]}
        </Col>
      </Row>
    </Container>
  </section>
);

IndexSection.defaultProps = {
  bgColor: 'bg1'
};

export default IndexSection;
