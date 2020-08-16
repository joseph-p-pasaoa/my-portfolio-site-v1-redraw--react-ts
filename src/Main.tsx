import React from 'react';

import './Main.scss';
import DemoLorem from './components/DemoLorem';


export default function Main() {
   return (
      <div className="Main">
         <figure className="background-dimmer"></figure>

      <div className="base-layout">
        <DemoLorem />
      </div>
   );
}
