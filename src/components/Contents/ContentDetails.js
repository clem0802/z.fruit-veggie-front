// import React from 'react';
import './contentdetails.css';
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
        <div className='content-details-outer-container'>

          <div className='content-details-inner-container'>
            <img className="detail-image" src={contents.imageUrl} alt="fruggie content" />
            <div className='title-category-container'>
              <p className="detail-category">{contents.category}</p>
              <h1 className="detail-title" style={{fontWeight: "bold"}}>{contents.title}</h1>
            </div>
            <div className='descript-back-container'>
              <p className="detail-descript">{contents.description}</p>
              <Link to="/contents" className='detail-back-btn'><span><p>Back to Contents Page</p></span></Link>
            </div>
          </div>

        </div>
    )
}