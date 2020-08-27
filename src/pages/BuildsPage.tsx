import React from 'react'

import builds from '../data/builds';
import BuildCard from '../components/BuildCard';


const BuildsPage = () => {



   return (
      <main>
         <h4 className='page__title no-flow'>Builds</h4>
         <BuildCard build={builds.endeavor} />
      </main>
   );
}


export default BuildsPage;
