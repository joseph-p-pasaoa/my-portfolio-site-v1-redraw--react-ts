import React from 'react';

import './Main.scss';


export default function Main() {
  return (
    <div className="Main">
      <div className="background-dimmer"></div>

      <div className="hero">
        Hello! My name is...<br />
        Joseph P. Pasaoa<br />
        <p className="text para">I learned <strong>BASIC</strong> on my own when I was small. In college, I studied International Relations and Comparative Politics.</p>

        <p className="text para">I've worked hard as a First Assistant to a high-fashion photographer in NYC for a number of years. I've also been a professional dance, fashion, and portrait photographer, myself.</p>

        <p className="text para">Yet it wasn't until I was selected into <a href="https://www.pursuit.org/" target="_blank" rel="noopener noreferrer" className="link--homepursuit">Pursuit</a> —an intensive, competitive <strong>full-stack</strong> coding Fellowship, that I discovered how much I truly enjoy programming and development.</p>

        <p className="text para">My experiences in the visual arts and political psychology have been a great well to draw from when developing front-ends and building <strong>effective UI/UX</strong> but I'm just as fascinated with the <strong>problem solving</strong>, <strong>optimizing</strong>, and <strong>design processes</strong> found all across the stack.</p>

        <p className="text para">I'm looking to find an <strong>rich and diverse environment</strong> where I can grow doubly as an engineer and as a <strong>teammate</strong>.</p>

        <p className="text para">Thank you for visiting. Please, have a fun look around!</p>
      </div>
    </div>
  );
}
