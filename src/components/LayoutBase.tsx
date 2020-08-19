import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';

interface LayoutBaseProps {
   children: React.ReactElement;
}


const LayoutBase: React.FC<LayoutBaseProps> = ({ children }) => {

   return (
      <Accordion
         className="layout-base"
         defaultActiveKey=""
         as="div"
      >
         {children}
      </Accordion>
   );
}


   export default LayoutBase;
