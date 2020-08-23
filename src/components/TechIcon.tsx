import React from 'react'

import techIcons from '../data/techIconsData';

interface TechIconProps {
   name: string;
   className?: string;
}


const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
   return (
      <img
         src={techIcons[name]}
         alt={name}
         className={className}
      />
   );
}


export default TechIcon;
