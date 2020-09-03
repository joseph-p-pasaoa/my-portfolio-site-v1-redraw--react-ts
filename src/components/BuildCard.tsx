import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { DisplayBuildObject } from '../data/buildsIndex';

interface CarouselImageClickEvent extends React.MouseEvent<HTMLInputElement> {
   target: CarouselClickTarget;
}

interface CarouselClickTarget extends EventTarget {
   alt: string;
   dataset: {
      src: string;
   }
}

interface ModalImageObject {
   src: string;
   caption: string;
}

interface BuildCardProps {
   build: DisplayBuildObject;
   setShowLightbox: (arg0: boolean) => void;
   setModalImage: (arg1: ModalImageObject) => void;
}


const BuildCard: React.FC<BuildCardProps> = (props) => {
   const { build, setShowLightbox, setModalImage } = props;

   const handleCarouselClick = (e: CarouselImageClickEvent) => {
      if (e.target.dataset.src) {
         setModalImage({
            src: e.target.dataset.src,
            caption: e.target.alt
         });
         setShowLightbox(true);
      }
   }

   return(
      <article className='build-card'>
         <h4>{build.name}</h4>

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

      </article>
   );
}


export default BuildCard;
