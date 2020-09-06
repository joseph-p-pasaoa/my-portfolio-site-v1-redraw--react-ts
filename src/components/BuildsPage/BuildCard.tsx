import React from 'react';
import BuildCarousel from './BuildCarousel';

import BuildButtons from './BuildButtons';
import TechIcon from '../TechIcon';

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

         <BuildButtons
            liveUrl={build.liveUrl}
            repoUrl={build.repoUrl}
         />

         <BuildCarousel
            imgs={build.imgs}
            handleCarouselClick={handleCarouselClick}
         />

         {/* BuildMajorTechs */}
         <div className="build-major-techs">
            {build.mainTechs.map(tech => {
               return <TechIcon name={tech} />
            })}
         </div>

         <p className='description'>{build.description}</p>

      </article>
   );
}


export default BuildCard;
