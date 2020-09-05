import React from 'react'

import TechIcon from '../components/TechIcon';

import { KnownTech } from '../data/techIconsData';

type PrintSkillBlock = (
   title: string,
   techNames: KnownTech[]
) => JSX.Element;


const devSkills: Array<KnownTech> = [
   'Javascript (ES5+)',
   'Typescript',
   'Python',
   'HTML5',
   'CSS3',
   'SCSS',
   'PostgreSQL',
   'Heroku',
   'Netlify',
   'Firebase',
   'Gatsby'
];

const libsSkills: Array<KnownTech> = [
   'ReactJS',
   'React Redux',
   'React Router',
   'ExpressJS',
   'NodeJS'
];

const toolsSkills: Array<KnownTech> = [
   'Git',
   'Github',
   'Jest',
   'Chrome DevTools',
   'Firefox Developer',
   'VS Code',
   'Npm',
   'Postman'
];

const designSkills: Array<KnownTech> = [
   'Figma',
   'Bootstrap',
   'Diagrams.net (Draw.io)',
   'Adobe XD',
   'Adobe Photoshop',
   'Adobe InDesign',
   'Adobe Premiere Pro',
   'Adobe Lightroom'
];

const productivitySkills: Array<KnownTech> = [
   'Trello',
   'Basecamp'
];


const SkillsPage = () => {

   // helper: creates grouping jsx.element from passed-in data variable
   const printSkillBlock: PrintSkillBlock = (title, techs) => { // [<>Hello</>];
      const listSkills = techs.map(techName => {
         return(
            <li data-skill={techName} key={techName}>
               <TechIcon
                  name={techName}
                  className="skill-icon"
               />
            </li>
         );
      });

      const output =
         <ul className="grouping">
            <li className="grouping__title"> {/* Placed inside as li for abs positioning w/grouping */}
               <h4>{title}</h4>
            </li>

            {listSkills}
         </ul>;

      return output;
   };


   return (
      <main className='skills-page flow--col'>
         <h4 className='page__title no-flow'>Skills</h4>

         {printSkillBlock('Development', devSkills)}
         {printSkillBlock('Frameworks, Libraries, Runtimes', libsSkills)}
         {printSkillBlock('Tools', toolsSkills)}
         {printSkillBlock('Design, Create', designSkills)}
         {printSkillBlock('Productivity', productivitySkills)}

      </main>
   );
}


export default SkillsPage;
