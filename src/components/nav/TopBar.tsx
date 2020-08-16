import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


interface Props {
   children: React.ReactNode;
   eventKey: string;
   callback?: (value: string) => void;
}


const ContextAwareToggle: React.FC<Props> = ({ children, eventKey, callback }) => {
   const currentEventKey = useContext(AccordionContext);
   
   const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
   );
   
   const isCurrentEventKey = currentEventKey === eventKey;
   
   return (
      <button
         className={`hamburger hamburger--arrowturn ${isCurrentEventKey ? 'is-active' : ''}`}
         type="button"
         onClick={decoratedOnClick}
      >
         <span className="hamburger-box">
            <span className="hamburger-inner"></span>
         </span>
      </button>
   );
}


const TopBar = () => {

   return(
      <section className='topbar'>
         <figure className="topbar__background"></figure>

         <Accordion defaultActiveKey="0">
            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
            <Accordion.Collapse eventKey="0">
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
            </Accordion.Collapse>
            {/* <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
            <Accordion.Collapse eventKey="1">
               <>Hello! I'm another body</>
            </Accordion.Collapse> */}
         </Accordion>
      </section>
   );
}


export default TopBar;
