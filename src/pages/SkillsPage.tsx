import React from 'react'

type PrintSkillBlock = (
   header: string,
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
      src: require('../assets/images/tech-icons/react router.png')},
   { name: 'ExpressJS',
      src: require('../assets/images/tech-icons/express-original.svg')},
   { name: 'NodeJS',
      src: require('../assets/images/tech-icons/nodejs color.svg')}
];

const toolsData = [
   { name: 'Git',
      src: require('../assets/images/tech-icons/git.png')},
   { name: 'Github',
      src: require('../assets/images/tech-icons/github.svg')},
   { name: 'Jest',
      src: require('../assets/images/tech-icons/jestjs.svg')},
   { name: 'Chrome DevTools',
      src: require('../assets/images/tech-icons/chrome devtools.png')},
   { name: 'Firefox Developer',
      src: require('../assets/images/tech-icons/firefox developer.png')},
   { name: 'VS Code',
      src: require('../assets/images/tech-icons/vscode.svg')},
   { name: 'Npm',
      src: require('../assets/images/tech-icons/npm.svg')},
   { name: 'Postman',
      src: require('../assets/images/tech-icons/postman.svg')}
];

// const designData = [
//    { name: 'Figma',
//       src: require('')},
//    { name: 'Bootstrap',
//       src: require('')},
//    { name: 'Diagrams.net (Draw.io)',
//       src: require('')},
//    { name: 'Adobe XD',
//       src: require('')},
//    { name: 'Adobe Photoshop',
//       src: require('')},
//    { name: 'Adobe InDesign',
//       src: require('')},
//    { name: 'Adobe Premiere Pro',
//       src: require('')},
//    { name: 'Adobe Lightroom',
//       src: require('')}
// ];

// const productivityData = [
//    { name: 'Trello',
//       src: require('')},
//    { name: 'Basecamp',
//       src: require('')}
// ];

// TEMPLATE
// { name: '',
//       src: require('')}


const SkillsPage = () => {
   const printSkillBlock: PrintSkillBlock = (header, skillsData) => { // [<>Hello</>];
      const listSkills = skillsData.map(skillObj => {
         return(
            <li data-skill={skillObj.name} key={skillObj.name}>
               <img
                  src={skillObj.src}
                  className="icon-skill"
                  alt={skillObj.name}
               />
            </li>
         );
      });

      const output =
         <ul className="section">
            <li><h4 className="header-section">{header}</h4></li>
            {listSkills}
         </ul>;

      return output;
   };


   return (
      <section className='skills-page'>
         <h4>SkillsPage</h4>

         {printSkillBlock('Development', devData)}

         {printSkillBlock('Frameworks, Libraries, Runtimes', libsData)}

      </section>
   );
}


export default SkillsPage;
