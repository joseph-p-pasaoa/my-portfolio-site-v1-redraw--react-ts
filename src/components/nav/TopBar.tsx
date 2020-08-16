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
         type="button"
         style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
         onClick={decoratedOnClick}
      >
         {children}
      </button>
   );
}


const TopBar = () => {

   return(
      <section className='topbar'>
         <Accordion defaultActiveKey="0">
            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
            <Accordion.Collapse eventKey="0">
               <>Hello! I'm the body</>
            </Accordion.Collapse>
            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
            <Accordion.Collapse eventKey="1">
               <>Hello! I'm another body</>
            </Accordion.Collapse>
         </Accordion>
         TopBar
      </section>
   );
}


export default TopBar;
