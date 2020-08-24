import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

const myResume = require('../../assets/docs/Full-Stack_Developer_Resume_(Joseph_P_Passoa).pdf');

const NavListItems = () => {
   const toggleNavCollapse = useAccordionToggle("");

   return (
      <>
         <li className="nav-item">
            <a href={myResume} target="_blank" rel="noopener noreferrer" className="nav-link">
               <div>Resume</div>
            </a>
         </li>
         <li className="nav-item">
            <NavLink to={`/skills`} className="nav-link" onClick={toggleNavCollapse}>
               <div>Skills</div>
            </NavLink>
         </li>
         <li className="nav-item">
            <NavLink to={`/builds`} className="nav-link" onClick={toggleNavCollapse}>
               <div>Builds</div>
            </NavLink>
         </li>
         <li className="nav-item">
            <NavLink to={`/aboutme`} className="nav-link" onClick={toggleNavCollapse}>
               <div>About Me</div>
            </NavLink>
         </li>
         {/* <li className="nav-item">
            <NavLink to={`/blog`} className="nav-link">
               <div>Blog</div>
            </NavLink>
         </li> */}
         <li className="nav-item">
            <a href="https://www.josephpasaoa.com" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={toggleNavCollapse}>
               <div>Photography</div>
            </a>
         </li>
         {/* <li className="nav-item">
            <NavLink to={`/siteinfo`} className="nav-link">
               <div>About This Site</div>
            </NavLink>
         </li> */}
         {/* <li className="nav-item">
            <NavLink to={`/contactme`} className="nav-link" onClick={toggleNavCollapse}>
               <div>Contact Me <FontAwesomeIcon icon={["far", "edit"]} className="faicon--iconbar" /></div>
            </NavLink>
         </li> */}
         <li className="nav-item">
            <NavLink exact to={`/`} className="nav-link" onClick={toggleNavCollapse}>
               <div>Home</div>
            </NavLink>
         </li>
      </>
   );
}


export default NavListItems;
