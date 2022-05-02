import React from 'react';
// fichier pas utilisé, à voir

export default function FavoriteContents({favoriteContents,removeFromFavorites}) {
  return (
    <div className='favorites-container'>
        <p>FavoriteContents</p><br />
        <p>Click a fruit or vegetable to add</p>
        {
            // favoriteContents.map(item=><p>{item.content}</p>) // when get info, it will be shown inside <p></p>
            favoriteContents.map(item=>{
                return <button onClick={()=>removeFromFavorites(item)} key={item.id} className={item.category==="fruit" ? "fruit-button" : "veggie-button"}>{item.content}</button>
            })
            
        }
    </div>
  )
}