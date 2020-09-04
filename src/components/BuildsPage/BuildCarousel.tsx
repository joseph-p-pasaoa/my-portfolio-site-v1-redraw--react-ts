import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { DisplayBuildObject } from '../../data/buildsIndex';
import { CarouselImageClickEvent } from './BuildCard';

interface BuildCarouselProps {
   build: DisplayBuildObject;
   handleCarouselClick: (arg0: CarouselImageClickEvent) => void;
}


const BuildCarousel: React.FC<BuildCarouselProps> = ({build, handleCarouselClick}) => {
   return (
      <figure className='build-carousel'>
         <Carousel
            onClick={handleCarouselClick}
            interval={null}
         >
            {build.imgs.map((imgObj, index) => {
               return(
                  <Carousel.Item key={imgObj.thumbSrc}>
                     <img
                        src={imgObj.thumbSrc}
                        alt={imgObj.caption}
                        data-src={imgObj.largeSrc}
                        // className="d-block w-100"
                     />
                     <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>{`${index + 1}. ${imgObj.caption}`}</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </figure>
   );
}


export default BuildCarousel;
