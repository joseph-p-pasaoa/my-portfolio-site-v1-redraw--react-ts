import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

interface StageProps {
   children: React.ReactElement;
}


const Stage: React.FC<StageProps> = ({ children }) => {
   const toggleNavCollapse = useAccordionToggle("");

   return (
      <div className="stage" onClick={toggleNavCollapse}>
         {children}
      </div>
   );
}


export default Stage;
