import {
  FC, PropsWithChildren, RefObject, useCallback
} from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { setThisAsLoaded, useScrollToContent } from 'lib/util';

type HeroProps = PropsWithChildren<{
  imgSrc: string
  imgStyles?: {
    [property: string]: any
  }
  layoutRef: RefObject<HTMLDivElement>
}>

const Hero: FC<HeroProps> = ({
  imgSrc, imgStyles, layoutRef, children
}: HeroProps) => {
  const scrollToContent = useCallback(useScrollToContent(layoutRef), []);

  return (
    <section id='hero' className='vh-100'>
      <img src={imgSrc} alt='' className='background' ref={setThisAsLoaded} style={imgStyles} />
      <div className='position-absolute hero-block text-light top-50 left-0 left-xl-8 right-0 right-md-auto bottom-0 bottom-md-auto pt-3 pt-md-2 pl-5 pr-4 pr-lg-5 d-flex flex-column'>
        { children }
        <div className='my-md-5 flex-grow-1 d-flex align-items-center justify-content-center'>
          <FAI
            icon={faChevronDown}
            size='3x'
            onClick={scrollToContent}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
