import React from 'react';
// ce fichier, à voir

export default function FavoriteBaskets({favoriteBaskets,removeFromFavorites}) {
  return (
    <div className='favorites-container'>
        <p>FavoriteBaskets</p><br />
        <p>Click a fruit or vegetable to add</p>
        {
            // favoriteBaskets.map(item=><p>{item.basket}</p>) // when get info, it will be shown inside <p></p>
            favoriteBaskets.map(item=>{
                return <button onClick={()=>removeFromFavorites(item)} key={item.id} className={item.category==="fruit" ? "fruit-button" : "veggie-button"}>{item.basket}</button>
            })
            
        }
    </div>
  )
}