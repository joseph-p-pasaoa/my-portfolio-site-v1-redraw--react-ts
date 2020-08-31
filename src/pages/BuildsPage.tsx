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

/*
<>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>

*/