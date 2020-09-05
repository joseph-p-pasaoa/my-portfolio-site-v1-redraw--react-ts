export type KnownTech =
   // DEVELOPMENT
   | 'Javascript (ES5+)'
   | 'Typescript'
   | 'Python'
   | 'HTML5'
   | 'CSS3'
   | 'SCSS'
   | 'PostgreSQL'
   | 'Heroku'
   | 'Netlify'
   | 'Firebase'
   | 'Gatsby'

   // LIBRARIES, FRAMEWORKS, RUNTIMES
   | 'ReactJS'
   | 'React Redux'
   | 'React Router'
   | 'ExpressJS'
   | 'NodeJS'

   // TOOLS
   | 'Git'
   | 'Github'
   | 'Jest'
   | 'Chrome DevTools'
   | 'Firefox Developer'
   | 'VS Code'
   | 'Npm'
   | 'Postman'

   // DESIGN, CREATE
   | 'Figma'
   | 'Bootstrap'
   | 'Diagrams.net (Draw.io)'
   | 'Adobe XD'
   | 'Adobe Photoshop'
   | 'Adobe InDesign'
   | 'Adobe Premiere Pro'
   | 'Adobe Lightroom'

   // PRODUCTIVITY
   | 'Trello'
   | 'Basecamp';

type IconData = {
   [K in KnownTech]: string
};


export const techIcons: IconData = {
   // DEVELOPMENT
   'Javascript (ES5+)': require('../assets/images/tech-icons/js.svg'),
   'Typescript': require('../assets/images/tech-icons/typescript.svg'),
   'Python': require('../assets/images/tech-icons/python.svg'),
   'HTML5': require('../assets/images/tech-icons/html5.png'),
   'CSS3': require('../assets/images/tech-icons/css3.png'),
   'SCSS': require('../assets/images/tech-icons/scss.png'),
   'PostgreSQL': require('../assets/images/tech-icons/postgresql.png'),
   'Heroku': require('../assets/images/tech-icons/heroku.svg'),
   'Netlify': require('../assets/images/tech-icons/netlify.png'),
   'Firebase': require('../assets/images/tech-icons/firebase-logo.svg'),
   'Gatsby': require('../assets/images/tech-icons/gatsbyjs.svg'),

   // LIBRARIES, FRAMEWORKS, RUNTIMES
   'ReactJS': require('../assets/images/tech-icons/react.svg'),
   'React Redux': require('../assets/images/tech-icons/redux.svg'),
   'React Router': require('../assets/images/tech-icons/react-router.png'),
   'ExpressJS': require('../assets/images/tech-icons/express-original.svg'),
   'NodeJS': require('../assets/images/tech-icons/nodejs-color.svg'),

   // TOOLS
   'Git': require('../assets/images/tech-icons/git.png'),
   'Github': require('../assets/images/tech-icons/github.svg'),
   'Jest': require('../assets/images/tech-icons/jestjs.svg'),
   'Chrome DevTools': require('../assets/images/tech-icons/chrome-devtools.png'),
   'Firefox Developer': require('../assets/images/tech-icons/firefox-developer.png'),
   'VS Code': require('../assets/images/tech-icons/vscode.svg'),
   'Npm': require('../assets/images/tech-icons/npm.svg'),
   'Postman': require('../assets/images/tech-icons/postman.svg'),

   // DESIGN, CREATE
   'Figma': require('../assets/images/tech-icons/figma.png'),
   'Bootstrap': require('../assets/images/tech-icons/bootstrap.svg'),
   'Diagrams.net (Draw.io)': require('../assets/images/tech-icons/drawio.png'),
   'Adobe XD': require('../assets/images/tech-icons/exp-design.svg'),
   'Adobe Photoshop': require('../assets/images/tech-icons/photoshop.svg'),
   'Adobe InDesign': require('../assets/images/tech-icons/indesign.svg'),
   'Adobe Premiere Pro': require('../assets/images/tech-icons/premiere-pro.svg'),
   'Adobe Lightroom': require('../assets/images/tech-icons/lightroom.svg'),

   // PRODUCTIVITY
   'Trello': require('../assets/images/tech-icons/trello.svg'),
   'Basecamp': require('../assets/images/tech-icons/basecamp.png')
};


export default techIcons;
