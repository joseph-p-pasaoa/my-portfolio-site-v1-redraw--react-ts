import React from 'react'

interface BuildObject {
   name: string;
   role?: string;
   description?: string;
   imgs?: any;    // DEV
   urlLive?: string;
   urlRepo?: string;
   techs?: Array<string>;
   obstacles?: string;
   wins?: string;
   features?: Array<string>;
   responsibilities?: string;
}

interface BuildCardProps {
   build: BuildObject;
   setShowLightbox: any;   // DEV
   setModalImage: any;     // DEV
}


const BuildCard: React.FC<BuildCardProps> = (props) => {
   const { build, setShowLightbox, setModalImage } = props;

   const handleThumbClick = () => {
      setModalImage(build.imgs[0]);
      setShowLightbox(true);
   }

   return(
      <article className='build-card'>
         <h4>{build.name}</h4>

         <img
            src={build.imgs[0].src}
            alt={build.imgs[0].caption}
            onClick={handleThumbClick}
         />
      </article>
   );
}


export default BuildCard;
