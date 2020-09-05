import React from 'react'

import techIcons, { KnownTech } from '../data/techIconsData';

interface TechIconProps {
   name: KnownTech;
   className?: string;
}


const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
   return (
      <img
         src={techIcons[name]}
         alt={name}
         className={'tech-icon ' + className}
      />
   );
}


export default TechIcon;
