import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselProps } from 'react-bootstrap/Carousel';
import { ProjectsProps } from 'lib/types';

type ProjectsCarouselProps = CarouselProps & ProjectsProps;

const ProjectsCarousel: FC<ProjectsCarouselProps> = ({ projects }: ProjectsCarouselProps) => (
  <Carousel className='my-2 px-2'>
    {projects.map(({ id, data }) => (
      <Carousel.Item key={id}>
        <img
          className='d-block w-100'
          src={`/img/projects/${id}.jpg`}
          alt={id}
        />
        <Carousel.Caption>
          <h3>{data.heading}</h3>
          <p className='d-none d-md-block'>{data.subHeading}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default ProjectsCarousel;
