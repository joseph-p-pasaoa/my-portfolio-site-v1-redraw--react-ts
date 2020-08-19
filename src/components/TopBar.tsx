import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import NameBox from './Bars/NameBox';
import NavHamburger from './Bars/NavHamburger';
import NavListItems from './Bars/NavListItems';


const TopBar = () => {
   return(
      <section className='topbar'>
         <figure className="topbar__background"></figure>

         <NameBox />

         <NavHamburger eventKey="0" />
         <Accordion.Collapse eventKey="0">

            <nav className="topbar__nav">
               <ul className="nav-list flow">

                  <NavListItems />

               </ul>
            </nav>

         </Accordion.Collapse>
      </section>
   );
}


export default TopBar;
