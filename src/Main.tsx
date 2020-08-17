import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Main.scss';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';


export default function Main() {
   return (
      <div className="Main">
         <figure className="background-dimmer"></figure>

         <div className="layout-base">
            <TopBar />

            <Switch>
               {/* <Route path={`/projects`} component={ProjectsPage} /> */}
               {/* <Route path={`/contactme`} component={ContactMePage} /> */}
               {/* <Route path={`/skills`} component={SkillsPage} /> */}
               {/* <Route path={`/blog`} component={BlogPage} /> */}
               {/* <Route path={`/photography`} component={PhotographyPage} /> */}
               {/* <Route path={`/siteinfo`} component={SiteInfoPage} /> */}
               <Route path={`/`} component={HomePage} />
            </Switch>
         </div>
      </div>
   );
}
