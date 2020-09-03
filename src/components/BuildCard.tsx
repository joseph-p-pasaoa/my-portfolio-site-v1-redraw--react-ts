import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface BuildObject {
   name: string;
   role?: string;
   description?: string;
   imgs: Array<ImageObject>;
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
   thumbSrc: string;
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
                           data-src={imgObj.src}
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
