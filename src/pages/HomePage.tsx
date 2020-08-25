import React from 'react';


const HomePage = () => {
   return(
      <main className='home-page'>
         <div className='first-line'>
            <div className='greeting'>Hi!</div>
            <div className='pre-name'>I'm</div>
         </div>
         <h3 className='name'>
            Joseph
            <span className='dim'> P. Pasaoa</span>
         </h3>

         <article>
            <p>I'm a full-stack developer specialized in the PERN stack (PostgreSQL, Express, React.js, Node.js) and based in New York City.</p>
            <p>I like to build. I like to learn new things and challenge myself in the <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer' className='inline-link'>Pursuit</a> of being better.</p>
            <p>Also experienced in Typescript, Python, React Redux, SCSS/CSS, Jest, and HTML5. Adobe Creative Suite and Figma.</p>
            <p>Please, have a fun look around. Thank you for visiting!</p>
         </article>
      </main>
   );
}


export default HomePage;
