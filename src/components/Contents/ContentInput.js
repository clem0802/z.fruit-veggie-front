import React from 'react';
// ce fichier, à voir

export default function ContentInput({getAllBaskets,getOnlyFruits,getOnlyVeggies,handleFilter}) {
  return ( // inside Input.js, (1 input and 3 buttons)
    <div className='input-container'>Take a look at some fruggie posts
        <input placeholder="Enter a fruit or a vegetable" type="text" onChange={handleFilter} />
        <button className='all-button' onClick={getAllBaskets}>All posts</button>
        <button className='fruit-button' onClick={getOnlyFruits}>Fruit posts</button>
        <button className='veggie-button' onClick={getOnlyVeggies}>Veggie posts</button>
    </div>
  )
}
