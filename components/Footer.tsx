import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FC, ComponentProps, memo } from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface FooterProps extends ComponentProps<'footer'> {}

const Footer: FC<FooterProps> = ({ className }: FooterProps) => (
  <footer className={`flex-shrink-0 d-flex align-items-center ${className}`}>
    <p className='ml-3 my-0 mr-auto text-light'>&copy; 2020 Augustine Calvino</p>
    <Nav className='mr-2 mr-sm-0'>
      <Nav.Item>
        <Link href='https://github.com/acalvino4' passHref><Nav.Link target='_blank'><FAI icon={faGithub} size='2x' /></Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
        <Link href='https://www.linkedin.com/in/acalvino4/' passHref><Nav.Link target='_blank'><FAI icon={faLinkedinIn} size='2x' /></Nav.Link></Link>
      </Nav.Item>
      <Nav.Item>
        <Link href='mailto:acalvino4@gmail.com' passHref><Nav.Link target='_blank'><FAI icon={faEnvelope} size='2x' /></Nav.Link></Link>
      </Nav.Item>
    </Nav>
  </footer>
);

export default memo(Footer);
