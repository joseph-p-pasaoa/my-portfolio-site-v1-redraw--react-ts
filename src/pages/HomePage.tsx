import React from 'react';


const HomePage = () => {
   return(
      <section className='home-page'>
         <div className='page__container'>
            <div className='first-line'>
               <div className='greeting'>Hello!</div>
               <div className='pre-name'>My name is...</div>
            </div>
            <h3 className='name'>Joseph <span className='dim'>P. Pasaoa</span></h3>

            <p className='paragraph-copy'>I learned <strong>BASIC</strong> on my own when I was small. In college, I studied International Relations and Comparative Politics.</p>

            <p className='paragraph-copy'>I've worked hard as a First Assistant to a high-fashion photographer in NYC for a number of years. I've also been a professional dance, fashion, and portrait photographer, myself.</p>

            <p className='paragraph-copy'>Yet it wasn't until I was selected into <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer' className='link--homepursuit'>Pursuit</a> —an intensive, competitive <strong>full-stack</strong> coding Fellowship, that I discovered how much I truly enjoy programming and development.</p>

            <p className='paragraph-copy'>My experiences in the visual arts and political psychology have been a great well to draw from when developing front-ends and building <strong>effective UI/UX</strong> but I'm just as fascinated with the <strong>problem solving</strong>, <strong>optimizing</strong>, and <strong>design processes</strong> found all across the stack.</p>

            <p className='paragraph-copy'>I'm looking to find an <strong>rich and diverse environment</strong> where I can grow doubly as an engineer and as a <strong>teammate</strong>.</p>

            <p className='paragraph-copy'>Thank you for visiting. Please, have a fun look around!</p>
         </div>
      </section>
   );
}


export default HomePage;
