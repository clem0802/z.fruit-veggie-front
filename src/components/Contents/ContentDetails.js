// import React from 'react';
import './contentdetails.css';
import {useParams} from "react-router-dom"; 
import { Link } from 'react-router-dom';

import axios from 'axios';
import {useState,useEffect,useContext} from 'react';
// import { UserContext } from '../../context/UserContext';



export default function ContentDetails({baseUrl}){
    
  const [contents,setContents]=useState([]);
  // const {title} = useParams();
  const {id} = useParams();

  useEffect(()=>{
    // axios.get(`${baseUrl}/contentdetails/${title}}`)
    axios.get(`${baseUrl}/contentdetails2/${id}`)
    .then(res=>{
      setContents(res.data)
      console.log(res.data)
    })
    .catch(err=>console.log(err))
  }, [])


  // router.beforePopState((state) => {
  //   state.options.scroll = false;
  //   return true;
  // });


    

    return (
        <div className='content-details-outer-container'>

          <div className='content-details-inner-container'>

                  <img className="detail-image" src={contents.imageUrl} alt="fruggie content" />
                  <h3 className="detail-title" style={{fontWeight: "bold"}}>{contents.title}</h3>


              <div className='detail-descript-container'>
                  <p className="detail-descript">
                      <p className="detail-category">{contents.category}</p>
                      {contents.description}
                  </p>
                  <Link to="/contents" className='detail-back-btn' style={{textDecoration: 'none'}}><span><p>{"<<"} Back</p></span></Link>
              </div>
              

          </div>

        </div>
    )
}