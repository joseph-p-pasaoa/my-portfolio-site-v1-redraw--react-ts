import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import BrandIcons from './BrandIcons';

interface BrandStyleObj {
   home: string;
   notHome: string;
}


const BrandBox = () => {
   const isAtHome = useRouteMatch({ exact: true, path: "/" });
   const toggleNavCollapse = useAccordionToggle("");

   let brandStyle: BrandStyleObj = isAtHome
      ?  { home: 'show', notHome: 'hide' }
      :  { home: 'hide', notHome: 'show' };

   return (
      <div className="brandbox">

         <Link to={`/`} className="brand-link" onClick={toggleNavCollapse}>

            <div className={`brand--home ${brandStyle['home']}`}>
               <h1>
                  JP
               </h1>
               <h2>
                  Welcome!
               </h2>
               <BrandIcons />
            </div>

            <div className={`brand--not-home ${brandStyle['notHome']}`}>
               <h1>
                  Joseph P.<br />
                  Pasaoa
               </h1>
               <h2>
                  software engineer /<br />
                  full-stack developer
               </h2>
               <BrandIcons />
            </div>

         </Link>

      </div>
   );
}


export default BrandBox;
