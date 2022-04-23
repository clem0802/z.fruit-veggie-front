import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import './form.css';
import { UserContext } from '../../context/UserContext';


export default function Form({baseUrl}){
    
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const {user,setUser}=useContext(UserContext);

    const addNewFruggie=(e)=>{
        e.preventDefault();
        axios.post(`${baseUrl}/users/${user.id}/contents`,{
            title,description,category,imageUrl
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className='add-form-container'>
            <form className='add-content-form' onSubmit={addNewFruggie}>
                <h1>Add a New Fruggie</h1>
                <div className='input-container'>
                    <label>Fruggie Name</label>
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter fruggie name' />
                </div>
                <div className='input-container'>
                    <label>Fruggie Description</label>
                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Enter fruggie description'></textarea>
                </div>
                <div className='input-container'>
                    <label>Fruggie Category</label>
                    <input value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='Enter fruggie category' />
                </div>
                <div className='input-container'>
                    <label>Fruggie Image URL</label>
                    <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}} placeholder='Enter fruggie image url' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}