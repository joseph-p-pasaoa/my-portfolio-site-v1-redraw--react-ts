import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import './Main.scss';
import LayoutBase from './components/LayoutBase';
import TopBar from './components/TopBar';
import Stage from './components/Stage';
import HomePage from './pages/HomePage';
import BuildsPage from './pages/BuildsPage';
import SkillsPage from './pages/SkillsPage';
import AboutMePage from './pages/AboutMePage';
import PageEnd from './components/PageEnd';

// activate and populate FontAwesome sitewide icon library
library.add(faEdit, faFileAlt, faGithubSquare, faGithub, faLinkedin, faPlayCircle);


export default function Main() {
   const { pathname } = useLocation();
   const isAtHome = pathname === '/';


   return (
      <div className="Main">
         <figure
            className={`background-dimmer ${isAtHome ? '': 'showing'}`}>
         </figure>

         <LayoutBase>
            <>
               {/* ASIDE BARS (only one is "display: block" at any time) */}
               <TopBar isAtHome={isAtHome} />

               {/* PAGE ROUTING */}
               <Stage>
                  <Switch>
                     <Route path={`/skills`} component={SkillsPage} />
                     <Route path={`/builds`} component={BuildsPage} />
                     {/* <Route path={`/contactme`} component={ContactMePage} /> */}
                     {/* <Route path={`/blog`} component={BlogPage} /> */}
                     {/* <Route path={`/photography`} component={PhotographyPage} /> */}
                     {/* <Route path={`/siteinfo`} component={SiteInfoPage} /> */}
                     <Route path={`/aboutme`} component={AboutMePage} />
                     <Route path={`/`} component={HomePage} />
                  </Switch>
               </Stage>
               <PageEnd />
            </>
         </LayoutBase>
      </div>
   );
}
