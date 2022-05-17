// https://herotofu.com/solutions/guides/gatsby-contact-form
// npm install -D tailwindcss
// npx tailwindcss init


import React from 'react'
import { useState } from "react"; // for Contact form
import './contact.css';
 


const FORM_ENDPOINT = "https://public.herotofu.com/v1/1ed0dd70-ca28-11ec-a557-034a17e2da28"; 

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }
  
    return (
      <div className='contact-container'>
  
        <div className='form-container'>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              className="ipt px-3 py-3 text-yellow-400 placeholder-yellow-300 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring focus:ring-yellow-200 w-auto"
              required
            />
          </div>
  
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="ipt px-3 py-3 text-yellow-400 placeholder-yellow-300 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring focus:ring-yellow-200 w-full"
              required
            />
          </div>
  
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message for me"
              name="message"
              className="ipt px-3 py-3 text-yellow-400 placeholder-yellow-300 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring focus:ring-yellow-200 w-full"
              required
            />
          </div>
  
          <div className="mb-3 pt-0">
            <button
              style={{fontSize:18, fontWeight:"bold"}}
              className="ipt bg-gray-400 text-black active:bg-yellow-400 font-bold uppercase text-lg px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none focus:ring focus:ring-yellow-200 mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit">
              Send your message
            </button>
          </div>
  
          <p style={{fontSize:12, color: "yellow", textShadow: "1px 1px 2px yellow, 0 0 1em black, 0 0 0.2em brown"}}>photo by Annie Spratt</p>
        </form>
        </div>
        
      </div>
    );
  };
  
  export default Contact;