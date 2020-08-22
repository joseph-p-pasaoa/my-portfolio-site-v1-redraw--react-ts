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

// const libsData = [
//    { name: 'ReactJS',
//       src: require('')},
//    { name: 'React Redux',
//       src: require('')},
//    { name: 'React Router',
//       src: require('')},
//    { name: 'ExpressJS',
//       src: require('')},
//    { name: 'NodeJS',
//       src: require('')}
// ];

// const toolsData = [
//    { name: 'Git',
//       src: require('')},
//    { name: 'Github',
//       src: require('')},
//    { name: 'Jest',
//       src: require('')},
//    { name: 'Chrome DevTools',
//       src: require('')},
//    { name: 'Firefox Developer',
//       src: require('')},
//    { name: 'VS Code',
//       src: require('')},
//    { name: 'Npm',
//       src: require('')},
//    { name: 'Postman',
//       src: require('')}
// ];

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
  return (
    <>SkillsPage</>
  );
}


export default SkillsPage;
