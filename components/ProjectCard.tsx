import { FC } from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { CardProps } from 'react-bootstrap/Card';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import { setThisAsLoaded } from 'lib/util';
import { ProjectProps } from 'lib/types';

type ProjectCardProps = CardProps & ProjectProps;

const ProjectCard: FC<ProjectCardProps> = ({ project: { id, data } }: ProjectCardProps) => (
  <Card className='embed-responsive embed-responsive-16by9'>
    <LazyLoad overflow throttle={250} once scrollContainer='#portfolio' resize offset={500}>
      <Card.Img src={`/img/projects/${id}.jpg`} className='embed-responsive-item' ref={setThisAsLoaded} />
    </LazyLoad>
    <Card.ImgOverlay className='fade-out d-flex flex-column justify-content-center align-items-center'>
      <Card.Title>{data.heading}</Card.Title>
      <Card.Text>{data.synopsis}</Card.Text>
      <FAI
        icon={faChevronDown}
        size='2x'
      />
    </Card.ImgOverlay>
    <Card.ImgOverlay className='slide-down-in secondary d-flex flex-column justify-content-center align-items-center'>
      <Link href={`portfolio/${id}`} passHref>
        <Button variant='outline-light' className='my-1'>View Project</Button>
      </Link>
      {data.viewLink && (
      <Link href={data.viewLink} passHref>
        <Button variant='outline-light' className='my-1'>{`View ${data.type}`}</Button>
      </Link>
      )}
    </Card.ImgOverlay>
  </Card>
);

export default ProjectCard;
