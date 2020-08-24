import React from 'react'
import { useLocation } from 'react-router-dom';

interface ButtonConditionals {
   [key: string]: boolean;
}

const showReturnBtn: ButtonConditionals = {
   '/skills': true,
   '/builds': true
}


const PageEnd = () => {
   const {pathname} = useLocation();

   const handleReturnToTop = () => {
      const topAnchor: HTMLParagraphElement | null = document.querySelector('#pageTopAnchor');
      if (topAnchor !== null) {
         topAnchor.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center'
         });
      }
   }

   let footerContent: JSX.Element | null = null;
   if (showReturnBtn[pathname]) {
      footerContent = <button
         type='button'
         className='top-return btn btn-info'
         onClick={handleReturnToTop}
      >Return to Top</button>;
   }


   return (
      <footer>
         {footerContent}
      </footer>
   );
}


export default PageEnd;
