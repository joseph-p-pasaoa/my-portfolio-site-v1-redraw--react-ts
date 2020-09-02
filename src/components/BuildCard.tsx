import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface BuildObject {
   name: string;
   role?: string;
   description?: string;
   imgs?: Array<ImageObject>;
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

interface ImageObject {
   thumb: string;
   caption: string;
   src: string;
}


const BuildCard: React.FC<BuildCardProps> = (props) => {
   const { build, setShowLightbox, setModalImage } = props;

   const handleCarouselClick = (e: any) => {
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

         <Carousel onClick={handleCarouselClick}>
            {build.imgs.map(imgObj => {
               return(
                  <Carousel.Item>
                     <img
                        // className="d-block w-100"
                        src={imgObj.thumb}
                        alt={imgObj.caption}
                        data-src={imgObj.src}
                        key={imgObj.thumb}
                     />
                     <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>{imgObj.caption}</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               );
            })}
         </Carousel>

      </article>
   );
}


export default BuildCard;
