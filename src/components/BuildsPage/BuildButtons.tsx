import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BuildButtonsProps {
   liveUrl?: string;
   repoUrl?: string;
}


const BuildButtons: React.FC<BuildButtonsProps> = ({liveUrl, repoUrl}) => {
   return (
      <div className='build-buttons flow--row'>

         {/* Live Button */}
         <a
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='primary-button'
            data-name='live-link'
         >
            <span>Live</span>
            <FontAwesomeIcon icon={['fas', 'running']} className='fontawesome-icon--button' />
         </a>

         {/* Repo Button */}
         <a
            href={repoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='primary-button'
            data-name='repo-link'
         >
            <span>Repo</span>
            <FontAwesomeIcon icon={['fab', 'git-alt']} className='fontawesome-icon--button' />
         </a>

      </div>
   );
}


export default BuildButtons;
