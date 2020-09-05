import React from 'react';
import BuildCarousel from './BuildCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProcessedBuildObject } from '../../data/buildsIndex';

export interface CarouselImageClickEvent extends React.MouseEvent<HTMLInputElement> {
   target: CarouselClickTarget;
}

interface CarouselClickTarget extends EventTarget {
   alt: string;
   dataset: {
      src: string;
   }
}

export interface ModalImageObject {
   src: string;
   caption: string;
}

interface BuildCardProps {
   build: ProcessedBuildObject;
   index: number;
   setShowLightbox: (arg0: boolean) => void;
   setModalImage: (arg1: ModalImageObject) => void;
}


const BuildCard: React.FC<BuildCardProps> = (props) => {
   const { build, index, setShowLightbox, setModalImage } = props;

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
         <h4>{`${index + 1}. ${build.name}`}</h4>

         <div className="build-buttons flow--row">
            <a
               href={build.liveUrl}
               target='_blank'
               rel='noopener noreferrer'
               className='primary-button'
            >
               <span>Live</span>
               <FontAwesomeIcon icon={["fas", "play-circle"]} className="fontawesome-icon--button" />
            </a>
            <a
               href={build.repoUrl}
               target='_blank'
               rel='noopener noreferrer'
               className='primary-button'
            >
               <span>Repo</span>
               <FontAwesomeIcon icon={["fab", "github"]} className="fontawesome-icon--button" />
            </a>
         </div>
         <BuildCarousel
            imgs={build.imgs}
            handleCarouselClick={handleCarouselClick}
         />

         <p className='description'>{build.description}</p>

      </article>
   );
}


export default BuildCard;
