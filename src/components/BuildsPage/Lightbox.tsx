import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { ModalImageObject } from './BuildCard';

interface LightboxProps {
   showLightbox: boolean;
   setShowLightbox: (arg0: boolean) => void;
   modalImage: ModalImageObject;
}


const Lightbox: React.FC<LightboxProps> = ({showLightbox, setShowLightbox, modalImage}) => {
   return (
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
   );
}


export default Lightbox;
