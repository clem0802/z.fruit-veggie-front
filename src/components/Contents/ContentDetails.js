import React from 'react';
import './contents.css';
import {useParams} from "react-router-dom"; 

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
                <img className="content-detail-image" src={currentContent[0].imageUrl} alt="fruggie content" />
                <h1 style={{fontWeight: "bold"}}>{currentContent[0].title}</h1>
                <p>{currentContent[0].description}</p><br/>
                <p>{currentContent[0].category}</p><br/>

                {/* key={content.id} content={content} */}

                <a href={`/contents`}><button className='content-button back'>{currentContent[0]}Back to Contents Page</button></a>
          </div>
        </div>
    )
}