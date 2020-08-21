import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BrandIcons = () => {
   return (
      <Accordion.Collapse eventKey="0">
         <div className="brand__icons">
            <FontAwesomeIcon icon={["fab", "github-square"]} className="icon-fontawesome" />
            <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon-fontawesome" />
         </div>
      </Accordion.Collapse>
   );
}


export default BrandIcons;
