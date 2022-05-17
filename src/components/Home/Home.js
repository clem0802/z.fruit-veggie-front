import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='home-container'>

        <div className='fruggie-card'>       
          <br/>
            <h3 style={{fontWeight:"bold"}}>Fruggie App</h3>
            <p style={{fontWeight:"bold", fontSize: 20}}>by Clémence TAN</p>

            <h4>A project combining backend and frontend</h4>
            <br/>

            <details>
              <summary style={{fontWeight: "bold", textDecoration: "underline"}}>Details</summary>
              <p>First of all, infinite thanks to my dear <span style={{fontWeight: "bold"}}>"Mimo Dev"</span> instructor, Mrs <span style={{fontWeight: "bold"}}>Elif Balci</span>.
                 Without her, this project wouldn't have been able to be achieved. 
                 Also, many thanks to Mimo's CEO, CPO, many excellent coding instructors, 
                 and the entire invisible dev team I've never met and might never meet :)
              </p><br/>
              <p>
                The backend code of this project was based on the patterns of one backend lesson learned 
                in <span style={{fontWeight: "bold"}}>"Mimo Dev"</span> program. 
                The deployment was done through "Heroku CLI" (linking directly to GitHub isn't working well at this time).
                And the database (fake users + real fruggie contents) was done either via Postman 
                or manual data entry from the submit form.
              </p><br/>
              <p>
                Pertaining to the frontend, done with "React",
                each "fruggie" content card has a "See details" button 
                which is linked to another detail page, for some further brief infos of that fruit or vegetable. 
              </p>
            </details>
            <br/>

            <p>May 2022</p>
            <p className='piano-picman' style={{fontSize:10}}>Home page photo by Webvilla</p>
        </div>

    </div>
  )
}
