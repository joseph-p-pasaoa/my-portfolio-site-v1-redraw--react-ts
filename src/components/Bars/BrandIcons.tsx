import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BrandIcons = () => {
   return (
      <div className="brand__icons flow--row">
         <a
            href="https://github.com/joseph-p-pasaoa"
            className="topbar__icon-link"
            data-name="Github"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FontAwesomeIcon icon={["fab", "github-square"]} className="fontawesome-icon--topnav" />
         </a>
         <a
            href="https://www.linkedin.com/in/josephpasaoa/"
            className="topbar__icon-link"
            data-name="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FontAwesomeIcon icon={["fab", "linkedin"]} className="fontawesome-icon--topnav" />
         </a>
      </div>
   );
}


export default BrandIcons;
