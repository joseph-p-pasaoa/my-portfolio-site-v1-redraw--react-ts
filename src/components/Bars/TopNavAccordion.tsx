import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import ContextAwareToggle from './ContextAwareToggle';

interface TopNavAccordionProps {
   children: React.ReactElement;
}


const TopNavAccordion: React.FC<TopNavAccordionProps> = ({ children }) => {
   return(
      <Accordion defaultActiveKey="">
         <ContextAwareToggle eventKey="0" />
         <Accordion.Collapse eventKey="0">

            {children}

         </Accordion.Collapse>
      </Accordion>
   );
}


export default TopNavAccordion;
