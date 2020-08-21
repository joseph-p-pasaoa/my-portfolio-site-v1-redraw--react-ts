import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Main.scss';
import LayoutBase from './components/LayoutBase';
import TopBar from './components/TopBar';
import Stage from './components/Stage';
import HomePage from './pages/HomePage';
import BuildsPage from './pages/BuildsPage';
import SkillsPage from './pages/SkillsPage';

// activate and populate FontAwesome sitewide icon library
library.add(faEdit, faFileAlt, faGithubSquare, faLinkedin);


export default function Main() {
   return (
      <div className="Main">
         <figure className="background-dimmer"></figure>

         <LayoutBase>
            <>
               {/* ASIDE BARS (only one is "display: block" at any time) */}
               <TopBar />

               {/* PAGE ROUTING */}
               <Stage>
                  <Switch>
                     <Route path={`/builds`} component={BuildsPage} />
                     {/* <Route path={`/contactme`} component={ContactMePage} /> */}
                     <Route path={`/skills`} component={SkillsPage} />
                     {/* <Route path={`/blog`} component={BlogPage} /> */}
                     {/* <Route path={`/photography`} component={PhotographyPage} /> */}
                     {/* <Route path={`/siteinfo`} component={SiteInfoPage} /> */}
                     <Route path={`/`} component={HomePage} />
                  </Switch>
               </Stage>
            </>
         </LayoutBase>
      </div>
   );
}
