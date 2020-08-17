import React from 'react'

import TopNavAccordion from './Bars/TopNavAccordion';


const TopBar = () => {

   return(
      <section className='topbar'>
         <figure className="topbar__background"></figure>

         <TopNavAccordion>
            <nav>
               <ul className="topbar-nav-list">

                  <li className="nav-item">
                     <a href=".dummy" className="nav-link">
                        TopBar
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href=".dummy" className="nav-link">
                        Link 2
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href=".dummy" className="nav-link">
                        Link 3
                     </a>
                  </li>

               </ul>
            </nav>
         </TopNavAccordion>
      </section>
   );
}


export default TopBar;
