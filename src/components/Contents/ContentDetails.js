
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import './contents.css';
import {useParams} from "react-router-dom"; 
// import { UserContext } from '../../context/UserContext';


export default function ContentDetails({baseUrl}){
    

    const {title} = useParams();
    const currentContent = {baseUrl}.filter(item=>item.title===title); 

    return (
        <div className='content-details-container'>
          <div>   
              <img className="content-detail-image" src={currentContent[0].imageUrl} alt="fruggie content" />
                <h1 style={{fontWeight: "bold"}}>{currentContent[0].title}</h1>
                <p>{currentContent[0].description}</p><br/>
                <p>{currentContent[0].category}</p><br/>

                <a href={`/contents`}><button className='content-button back'>{currentContent[0]}back to Contents Page</button></a>
          </div>
        </div>
    )
}