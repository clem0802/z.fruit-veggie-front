import axios from 'axios';
import {useEffect,useState,useContext} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function ContentCard({content}){
    // const [userId,setUserId]=useState();
    const handleDelete=()=>{
        axios.delete(`https://fruggie.herokuapp.com/contents/${content.id}`)
        .then(res=>{
            // console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }


    const {user,setUser}=useContext(UserContext);

    return (
        
            <div className='content-card'>

                    <img className='content-img' src={content.imageUrl} alt="content" />
                    <div className='content-info'>
                        <h2 className='content-title'>{content.title}</h2><br />
                        <div className={content.category==="fruit" ? "fruit-button" : "veggie-button"}>
                        {content.category}
                        </div>  
                    </div>

                    <div className='detail-delete-container'>
                        <button className='detail-button'>
                            <Link to={`/contentdetails/${content.title}`}><span><p>See details</p></span></Link>
                        </button>
                        {
                            user.id===content.user_id ? <button className='delete-button' onClick={handleDelete}><p>Delete card</p></button> : null
                        }
                    </div>
            
            </div>


    )
}