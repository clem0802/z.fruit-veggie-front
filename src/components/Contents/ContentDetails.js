import React from 'react';
import './contents.css';
import {useParams} from "react-router-dom"; 
import { Link } from 'react-router-dom';

// import {useState,useEffect,useContext} from 'react';
// import { UserContext } from '../../context/UserContext';
// import axios from 'axios';


export default function ContentDetails({baseUrl}){
    

    const {title} = useParams();
    const currentContent = {baseUrl}.filter(item=>item.title===title); 

    return (
        <div className='content-details-container'>
          TESTING (2)
          <div>   
                <img className="content-detail-image" src={currentContent[1].imageUrl} alt="fruggie content" />
                <h1 style={{fontWeight: "bold"}}>{currentContent[1].title}</h1>
                <p>{currentContent[1].description}</p><br/>
                <p>{currentContent[1].category}</p><br/>

                {/* key={content.id} content={content} */}
                <Link to="/contents" className='content-button back'><span><p>Back to Contents Page</p></span></Link>
          </div>
        </div>
    )
}