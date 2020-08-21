import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import BrandBox from './Bars/BrandBox';
import NavHamburger from './Bars/NavHamburger';
import BrandIcons from './Bars/BrandIcons';
import NavListItems from './Bars/NavListItems';


const TopBar = () => {
   return(
      <section className='topbar'>
         <figure className="topbar__background"></figure>

         <BrandBox />

         <NavHamburger eventKey="0" />
         <Accordion.Collapse eventKey="0" className="nav-collapse">

            <nav className="topbar__nav">
               <ul className="nav-list flow--col">

                  <NavListItems />

               </ul>
               <BrandIcons />
            </nav>

         </Accordion.Collapse>
      </section>
   );
}


export default TopBar;
