import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import NameBox from './Bars/NameBox';
import NavHamburger from './Bars/NavHamburger';
import NavListItems from './Bars/NavListItems';


/**
 * Hook that alerts clicks outside of the passed ref
 */
// function useOutsideAlerter(ref: any) {
//    useEffect(() => {
//       /**
//       * Alert if clicked on outside of element
//       */
//       function handleClickOutside(event: any) {
//          if (ref.current && !ref.current.contains(event.target)) {
//                alert("You clicked outside of me!");
//          }
//       }

//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//          // Unbind the event listener on clean up
//          document.removeEventListener("mousedown", handleClickOutside);
//       };
//    }, [ref]);
// }


const TopBar = () => {
   // const wrapperRef = useRef<HTMLDivElement>(null);
   // useOutsideAlerter(wrapperRef);

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
