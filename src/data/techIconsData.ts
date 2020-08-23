interface iconData {
   [key: string]: string;
}


export const devIcons: iconData = {
   'Javascript (ES5+)': require('../assets/images/tech-icons/js.svg'),
   'HTML5': require('../assets/images/tech-icons/html5.png'),
   'CSS3': require('../assets/images/tech-icons/css3.png'),
   'SCSS': require('../assets/images/tech-icons/scss.png'),
   'PostgreSQL': require('../assets/images/tech-icons/postgresql.png'),
   'Heroku': require('../assets/images/tech-icons/heroku.svg'),
   'Netlify': require('../assets/images/tech-icons/netlify.png'),
   'Firebase': require('../assets/images/tech-icons/firebase-logo.svg'),
   'Gatsby': require('../assets/images/tech-icons/gatsbyjs.svg')
};

export default (devIcons);
