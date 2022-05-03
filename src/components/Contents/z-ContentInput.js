import React from 'react';
import './contentinput.css';


export default function ContentInput({getAllContents,getOnlyFruits,getOnlyVeggies,handleFilter}) {
  return ( // inside Input.js, (1 input and 3 buttons)
    <div className='content-input-container'>
        <input className="enter-fruggie" placeholder="Enter a fruit or a vegetable" type="text" onChange={handleFilter} />
        <button className='all-btn' onClick={getAllContents}>all fruggies</button>
        <button className='fruit-btn' onClick={getOnlyFruits}>only fruit</button>
        <button className='veggie-btn' onClick={getOnlyVeggies}>only veggie</button>
    </div>
  )
}
