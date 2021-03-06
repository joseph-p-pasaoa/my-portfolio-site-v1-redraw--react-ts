import { InitialBuildObject } from '../buildsIndex';


const endeavor: InitialBuildObject = {
   name: "Endeavor",
   buildName: 'endeavor',
   description: `A platform empowering organizations in managing their volunteer workforce amid organizational events seamlessly.`,
   imgs: [
      { caption: "Admin's Dashboard",
         filename: '1-admin-dash.png' },
      { caption: 'Landing Login',
         filename: '2-landing.png' },
      { caption: 'Database Schema',
         filename: '3-schema.png' },
      { caption: 'Volunteer Signup',
         filename: '4-vol-signup.png' },
      { caption: 'Volunteer\'s Dashboard',
         filename: '5-vol-dash-iphone.png' },
      { caption: 'Admin\'s New Volunteers Dash',
         filename: '6-newvols-anim.gif',
         special: 'animation' }
   ],
   liveUrl: "https://endeavor-app.herokuapp.com/",
   repoUrl: "https://github.com/joseph-p-pasaoa/endeavor--fs-web--clone",
   mainTechs: [
      "PostgreSQL",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "SCSS",
      "Javascript (ES5+)",
      "Bootstrap",
      "CSS3",
      "HTML5"
   ],
   otherTechs: [
      "AWS-SDK 2.647.0",
      "SendGrid API v3 (external)",
      "Google Calendar (external)",
      "Multer 1.4.2",
      "Multer-S3 2.9.0",
      "Passport 0.3.1",
      "Passport-Local 1.0.0",
      "BCrypt 4.0.1",
      "SendGrid/Mail 7.0.1",
      "Chart.js 2.9.3",
      "Moment 2.24.0",
      "Query-String 6.12.1",
      "React Epic Spinners 0.4.1",
      "React Icons 3.10.0",
      "Pg-promise 10.4.4",
      "Axios 0.19.2",
   ],
   role: "team build",
   obstacles: `From beginning to end, the three of us struggled to get a sense of how to be productive developers in the new COVID-19 lockdown era. We had to wrestle between adding more features and focusing on core functionality, wanting to learn new techs and avoiding adding too much complexity onto our plates. We had to figure out how to deal with not only our ambitiousness but secondly work/life balances stressed from being locked-down at home for months.`,
   wins: `We dedicated months to a great team effort, in addition to creating this project entirely remotely. We succeeded in implementing SendGrid, AWS, ChartJS, and MomentJS into our Minimal Viable Product. We developed a robust RESTful API with elaborate PSQL database protected behind user auth checks and input validations on all non-GET API requests. To top it off, we learned so much about software development under our mentors Dion Ridley, an Engineering Leader at Netflix, and Ben Sussman, an Engineer at Spell, including discussions on GraphQL, Apollo, Redis, among other techs.`,
   features: [
      "four distinct user roles: staff, admin (elevated staff), volunteer, student",
      "user authentication",
      "AWS-S3 + Multer for file storage",
      "SendGrid API integration for realtime notification via email",
      "Google Calendar utilization for productivity flow",
      "PostgreSQL database with indexing, 4 join tables, and soft delete",
      "ChartJS integration for statistical visualizations",
      "MomentJS integration for time handling",
      "list <--> grid visual data mode toggle",
      "RESTful API with CRUD",
      "server error handling w/ specific http response codes",
      "front-end & back-end input validation",
      "intuitive visual feedback",
      "screen media responsive",
      "carousel integration",
      "conceived and developed to address a real-life problem"
   ]
};


export default endeavor;
