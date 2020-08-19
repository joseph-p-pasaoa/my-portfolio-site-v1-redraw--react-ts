import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const BrandBox = () => {
   const toggleNavCollapse = useAccordionToggle("");

   return (
      <div className="brandbox">

         <Link to={`/`} className="brand-link" onClick={toggleNavCollapse}>

            <div className="brand--home">
               <h1>
                  JP
               </h1>
               <h2>
                  Welcome!
               </h2>
            </div>

            <div className="brand--not-home">
               <h1>
                  Joseph P.<br />
                  Pasaoa
               </h1>
               <h2>
                  software engineer /<br />
                  full-stack developer
               </h2>
            </div>

         </Link>

         <Accordion.Collapse eventKey="0">
            <div>
               IconsPH
            </div>
         </Accordion.Collapse>

      </div>
   );
}


export default BrandBox;
