import React,{useState} from 'react';
import './contents.css';
import ContentCard from './ContentCard';



export default function Contents({contents}) { // {contents} is an array 


    return (
     <div>
        <div className='contents-container'>

            {
                contents.map((content)=>{
                    // return <ContentCard key={content.id} content={content} />
                    return <ContentCard content={content} />
                })
            }
        </div>
    </div>
    )
}