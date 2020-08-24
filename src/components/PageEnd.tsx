import React from 'react'

interface PageEndProps {
   mode?: string;
}


const PageEnd: React.FC<PageEndProps> = ({ mode }) => {
   return (
      <footer>
         <button
            type='button'
            className='top-return btn btn-info'
            onClick={() => {
               console.log('return to top');
            }}
         >Return to Top</button>
      </footer>
   );
}


export default PageEnd;
