import React, { useContext } from 'react'
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

interface ContextAwareToggleProps {
   children?: React.ReactNode;
   eventKey: string;
   callback?: (value: string) => void;
}


const ContextAwareToggle: React.FC<ContextAwareToggleProps> = ({ children, eventKey, callback }) => {
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


export default ContextAwareToggle;
