import React from 'react'

interface BuildObject {
   name: string;
   role?: string;
   description?: string;
   imgUrls?: Array<string>;
   urlLive?: string;
   urlRepo?: string;
   techs?: Array<string>;
   obstacles?: string;
   wins?: string;
   features?: string;
   responsibilities?: string;
}

interface BuildCardProps {
   build: BuildObject;
}


const BuildCard: React.FC<BuildCardProps> = ({build}) => {
   return(
      <article className='build-card'>
         <h4>{build.name}</h4>
      </article>
   );
}


export default BuildCard;
