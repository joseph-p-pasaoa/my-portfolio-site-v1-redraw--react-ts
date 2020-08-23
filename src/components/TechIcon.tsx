import React from 'react'

import devIcons from '../data/techIconsData';

interface TechIconProps {
   name: string;
   className?: string;
}


const TechIcon: React.FC<TechIconProps> = ({ name, className }) => {
   return (
      <img src={devIcons[name]} alt={name} className={className} />
   );
}


export default TechIcon;
