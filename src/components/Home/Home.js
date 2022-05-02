import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='home-container'>

        <div className='fruggie-card'>       
          <br/>
            <h3 style={{fontWeight:"bold"}}>Fruggie App</h3>
            <h4>by Clémence TAN</h4>
            <br/>

            <p>
            A project combining backend and frontend. 
            </p>
            <br/>

            <details>
              <summary style={{fontWeight: "bold", textDecoration: "underline"}}>Details</summary>
              <p>First of all, I would like to give credit to my dear <span style={{fontWeight: "bold"}}>"Mimo Dev"</span> 
                 instructor, Mrs <span style={{fontWeight: "bold"}}>Elif Balci</span>.
                  Without her, this project wouldn't have been able to be achieved. 
              </p><br/>
              <p>
                  I wrote the backend code based on backend lessons I have learned 
                  in <span style={{fontWeight: "bold"}}>"Mimo Dev"</span> learning program, 
                  I then deployed the backend code through "Heroku CLI" (for the moment some issues in linking directly to GitHub).
                  I then created the database (fake users + real fruggie contents) via "Postman".
              </p><br/>
              <p>
                  As for the frontend, I did it with "React". 
                  Each fruggie content card has a "See details" button 
                  which is linked to another detail page, for some further brief infos of that fruit or vegetable. 
                  Many sincere thanks to Mr <span style={{fontWeight: "bold"}}>Johannes Berger</span> (CEO at Mimo), 
                  as well as to Mr <span style={{fontWeight: "bold"}}>Lorenz Schimik</span> (CPO at Mimo),
                  to Abed Hamami, Thomas Sattlecker, Barbara Peric...
                  and to the entire invisible dev team whom I have never met and might never meet.
                  Through you all, I was able to benefit from such an amazing web dev learning program. 
              </p>
            </details>
            <br/>

            <p>May 2022</p><br/>
            <p className='piano-picman' style={{fontSize:11}}>photo by Webvilla</p>
        </div>

    </div>
  )
}
