import React from 'react'

type PrintSkillBlock = (
   title: string,
   skillsData: {
      name: string;
      src: string;
   }[]
) => JSX.Element;


const devData = [
   { name: 'Javascript (ES5+)',
      src: require('../assets/images/tech-icons/js.svg')},
   { name: 'HTML5',
      src: require('../assets/images/tech-icons/html5.png')},
   { name: 'CSS3',
      src: require('../assets/images/tech-icons/css3.png')},
   { name: 'SCSS',
      src: require('../assets/images/tech-icons/scss.png')},
   { name: 'PostgreSQL',
      src: require('../assets/images/tech-icons/postgresql.png')},
   { name: 'Heroku',
      src: require('../assets/images/tech-icons/heroku.svg')},
   { name: 'Netlify',
      src: require('../assets/images/tech-icons/netlify.png')},
   { name: 'Firebase',
      src: require('../assets/images/tech-icons/firebase-logo.svg')},
   { name: 'Gatsby',
      src: require('../assets/images/tech-icons/gatsbyjs.svg')}
];

const libsData = [
   { name: 'ReactJS',
      src: require('../assets/images/tech-icons/react.svg')},
   { name: 'React Redux',
      src: require('../assets/images/tech-icons/redux.svg')},
   { name: 'React Router',
      src: require('../assets/images/tech-icons/react-router.png')},
   { name: 'ExpressJS',
      src: require('../assets/images/tech-icons/express-original.svg')},
   { name: 'NodeJS',
      src: require('../assets/images/tech-icons/nodejs-color.svg')}
];

const toolsData = [
   { name: 'Git',
      src: require('../assets/images/tech-icons/git.png')},
   { name: 'Github',
      src: require('../assets/images/tech-icons/github.svg')},
   { name: 'Jest',
      src: require('../assets/images/tech-icons/jestjs.svg')},
   { name: 'Chrome DevTools',
      src: require('../assets/images/tech-icons/chrome-devtools.png')},
   { name: 'Firefox Developer',
      src: require('../assets/images/tech-icons/firefox-developer.png')},
   { name: 'VS Code',
      src: require('../assets/images/tech-icons/vscode.svg')},
   { name: 'Npm',
      src: require('../assets/images/tech-icons/npm.svg')},
   { name: 'Postman',
      src: require('../assets/images/tech-icons/postman.svg')}
];

const designData = [
   { name: 'Figma',
      src: require('../assets/images/tech-icons/figma.png')},
   { name: 'Bootstrap',
      src: require('../assets/images/tech-icons/bootstrap.svg')},
   { name: 'Diagrams.net (Draw.io)',
      src: require('../assets/images/tech-icons/drawio.png')},
   { name: 'Adobe XD',
      src: require('../assets/images/tech-icons/exp-design.svg')},
   { name: 'Adobe Photoshop',
      src: require('../assets/images/tech-icons/photoshop.svg')},
   { name: 'Adobe InDesign',
      src: require('../assets/images/tech-icons/indesign.svg')},
   { name: 'Adobe Premiere Pro',
      src: require('../assets/images/tech-icons/premiere-pro.svg')},
   { name: 'Adobe Lightroom',
      src: require('../assets/images/tech-icons/lightroom.svg')}
];

const productivityData = [
   { name: 'Trello',
      src: require('../assets/images/tech-icons/trello.svg')},
   { name: 'Basecamp',
      src: require('../assets/images/tech-icons/basecamp.png')}
];

// TEMPLATE
// { name: '',
//       src: require('')}


const SkillsPage = () => {

   // helper: creates grouping jsx.element from passed-in data variable
   const printSkillBlock: PrintSkillBlock = (title, skillsData) => { // [<>Hello</>];
      const listSkills = skillsData.map(skillObj => {
         return(
            <li data-skill={skillObj.name} key={skillObj.name}>
               <img
                  src={skillObj.src}
                  className="skill-icon"
                  alt={skillObj.name}
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

         {printSkillBlock('Development', devData)}
         {printSkillBlock('Frameworks, Libraries, Runtimes', libsData)}
         {printSkillBlock('Tools', toolsData)}
         {printSkillBlock('Design, Create', designData)}
         {printSkillBlock('Productivity', productivityData)}

      </main>
   );
}


export default SkillsPage;
