import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BrandIcons = () => {
   return (
      <div className="brand__icons">
         <FontAwesomeIcon icon={["fab", "github-square"]} className="fontawesome--topnav" />
         <FontAwesomeIcon icon={["fab", "linkedin"]} className="fontawesome--topnav" />
      </div>
   );
}


export default BrandIcons;
