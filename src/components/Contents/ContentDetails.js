// import React from 'react';
import './contents.css';
import {useParams} from "react-router-dom"; 
import { Link } from 'react-router-dom';

import axios from 'axios';
import {useState,useEffect,useContext} from 'react';
// import { UserContext } from '../../context/UserContext';



export default function ContentDetails({baseUrl}){
    
  const [contents,setContents]=useState([]);
  const {title} = useParams();

  useEffect(()=>{
    axios.get(`${baseUrl}/contentdetails/${title}`)
    .then(res=>{
      setContents(res.data)
      console.log(res.data)
    })
    .catch(err=>console.log(err))
  }, [])



    

    return (
        <div className='content-details-container'>
          TESTING (2)
          <div>   
                <img className="content-detail-image" src={contents.imageUrl} alt="fruggie content" />
                <h1 style={{fontWeight: "bold"}}>{contents.title}</h1>
                <p>{contents.description}</p><br/>
                <p>{contents.category}</p><br/>

                {/* key={content.id} content={content} */}
                <Link to="/contents" className='content-button back'><span><p>Back to Contents Page</p></span></Link>
          </div>
        </div>
    )
}