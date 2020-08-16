import React from 'react';

import './Main.scss';
import TopBar from './components/nav/TopBar';
import DemoLorem from './components/DemoLorem';


export default function Main() {
   return (
      <div className="Main">
         <figure className="background-dimmer"></figure>

         <div className="layout-base">
            <TopBar />
            <DemoLorem />
         </div>
      </div>
   );
}
