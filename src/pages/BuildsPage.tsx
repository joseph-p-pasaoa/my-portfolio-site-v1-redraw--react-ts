import React, { useState } from 'react';

import BuildCard from '../components/BuildsPage/BuildCard';
import Lightbox from '../components/BuildsPage/Lightbox';
import builds from '../data/buildsIndex';


const BuildsPage = () => {
   const [showLightbox, setShowLightbox] = useState(false);
   const [modalImage, setModalImage] = useState({caption: '', src: ''});


   return (
      <main className='builds-page'>
         <h4 className='page__title no-flow'>Builds</h4>

         {builds.map(build => {
            return(
               <BuildCard
                  build={build}
                  setShowLightbox={setShowLightbox}
                  setModalImage={setModalImage}
                  key={build.buildName}
               />
            );
         })}

         <Lightbox
            showLightbox={showLightbox}
            setShowLightbox={setShowLightbox}
            modalImage={modalImage}
         />
      </main>
   );
}


export default BuildsPage;
