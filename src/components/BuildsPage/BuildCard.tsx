import React from 'react';
import BuildCarousel from './BuildCarousel';

import { DisplayBuildObject } from '../../data/buildsIndex';

export interface CarouselImageClickEvent extends React.MouseEvent<HTMLInputElement> {
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

         <BuildCarousel
            build={build}
            handleCarouselClick={handleCarouselClick}
         />

      </article>
   );
}


export default BuildCard;
