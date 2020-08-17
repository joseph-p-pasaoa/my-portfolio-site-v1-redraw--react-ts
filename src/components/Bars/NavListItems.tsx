import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const NavListItems = () => {
   const handleClick = useAccordionToggle("");

   return (
      <>
         <li>
            <NavLink exact to={`/`} className="nav-link" onClick={handleClick}>
               <div>Home</div>
            </NavLink>
         </li>
         <li>
            <NavLink to={`/projects`} className="nav-link" onClick={handleClick}>
               <div>Projects</div>
            </NavLink>
         </li>
         <li>
            <NavLink to={`/skills`} className="nav-link" onClick={handleClick}>
               <div>Skills</div>
            </NavLink>
         </li>
         {/* <li>
            <NavLink to={`/blog`} className="nav-link">
               <div>Blog</div>
            </NavLink>
         </li> */}
         {/* <li>
            <a href={joeysResume} target="_blank" rel="noopener noreferrer" className="nav-link">
               <div>Resume</div>
            </a>
         </li> */}
         <li>
            <a href="https://www.josephpasaoa.com" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={handleClick}>
               <div>Photography</div>
            </a>
         </li>
         {/* <li>
            <NavLink to={`/siteinfo`} className="nav-link">
               <div>About This Site</div>
            </NavLink>
         </li> */}
         {/* <li>
            <NavLink to={`/contactme`} className="nav-link" onClick={handleClick}>
               <div>Contact Me <FontAwesomeIcon icon={["far", "edit"]} className="faicon--iconbar" /></div>
            </NavLink>
         </li> */}
      </>
   );
}


export default NavListItems;
