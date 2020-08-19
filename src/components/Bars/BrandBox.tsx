import React from 'react';
import { Link } from 'react-router-dom';


const BrandBox = () => {
   const toggleNavCollapse = useAccordionToggle("");

   return (
      <div className="namebox">
         {/* <Link */}
         <h1 className="namebox__name namebox__name--brand">
            JP
         </h1>
      </div>
   );
}


export default BrandBox;
