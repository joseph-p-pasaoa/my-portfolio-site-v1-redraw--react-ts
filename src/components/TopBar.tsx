import React from 'react'

import NameBox from './Bars/NameBox';
import TopNavAccordion from './Bars/TopNavAccordion';
import NavListItems from './Bars/NavListItems';


const TopBar = () => {

   return(
      <section className='topbar'>
         <figure className="topbar__background"></figure>
         <NameBox />

         <TopNavAccordion>
            <nav>
               <ul className="topbar-nav-list">

                  <NavListItems />

               </ul>
            </nav>
         </TopNavAccordion>
      </section>
   );
}


export default TopBar;
