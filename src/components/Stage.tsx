import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

interface StageProps {
   children: React.ReactElement;
}


const Stage: React.FC<StageProps> = ({ children }) => {
   const handleStageClick = useAccordionToggle("");

   return (
      <div className="stage" onClick={handleStageClick}>
         {children}
      </div>
   );
}


   export default Stage;
