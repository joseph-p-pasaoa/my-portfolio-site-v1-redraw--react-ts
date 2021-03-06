import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import numToLetter from '../../utils/numToLetter';

import { ProcessedImgObject } from '../../data/buildsIndex';
import { CarouselImageClickEvent } from './BuildCard';

interface BuildCarouselProps {
   imgs: Array<ProcessedImgObject>;
   handleCarouselClick: (arg0: CarouselImageClickEvent) => void;
}


const BuildCarousel: React.FC<BuildCarouselProps> = ({imgs, handleCarouselClick}) => {
   return (
      <figure className='build-carousel'>
         <Carousel
            onClick={handleCarouselClick}
            interval={null}
         >
            {imgs.map((imgObj, index) => {
               let thumbCaption = imgObj.caption;

               // treatments for special image types
               switch (imgObj.note) {
                  case 'animation':
                     thumbCaption += '\n(click for animation)';
                     break;
                  default:
                     break;
               }

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
                        <p>{`${numToLetter(index + 1)}. ${thumbCaption}`}</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </figure>
   );
}


export default BuildCarousel;
