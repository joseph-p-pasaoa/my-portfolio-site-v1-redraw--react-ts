import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import builds from '../data/buildsIndex';
import BuildCard from '../components/BuildCard';


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

         <Modal
            show={showLightbox}
            onHide={() => setShowLightbox(false)}
            dialogClassName="lightbox-base"
            aria-labelledby="build-lightbox"
         >
            <Modal.Header closeButton>
               <Modal.Title id="build-lightbox">
                  {modalImage.caption}
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <img
                  src={modalImage.src}
                  alt={modalImage.caption}
               />
            </Modal.Body>
         </Modal>
      </main>
   );
}


export default BuildsPage;
