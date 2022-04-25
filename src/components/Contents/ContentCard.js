// import axios from 'axios';

import {useEffect,useState} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentCard({content}){
    const [userId,setUserId]=useState();
    const handleDelete=()=>{}

    return (
        <div className='content-card'>
            <img className='content-img' src={content.imageUrl} alt="content" />
            <div className='content-info'>
                <h2>{content.title}</h2><br />
                <p>{content.description}</p>
                    <div className='content-category'>
                        <p>{content.category}</p>
                    </div>  
            </div>

            <div>
                <button className='detail-button'>
                        <Link to={`/contentdetails/${content.id}`}><span><p>See details</p></span></Link>
                </button>

                {
                    userId===content.user_id ? <button onClick={handleDelete}>delete</button> : null
                }
            </div>
        </div>
    )
}