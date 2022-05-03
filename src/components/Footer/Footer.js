import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

import React from 'react';
 import { library } from "@fortawesome/fontawesome-svg-core";
 import { fab } from "@fortawesome/free-brands-svg-icons";
 import { fas } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 // Library Creation
 library.add(fas, fab);
 



export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="fontawesome-container">   
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100079029092235"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>     
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clemence-0802/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a> 
          <a target="_blank" rel="noreferrer" href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/clem0802"><FontAwesomeIcon icon={["fab", "github"]} /></a> 
      </div>
    </div>
  )
}


