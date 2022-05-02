// fichier pas utilisé, à voir
import React,{useState} from 'react';
import './contents.css';
import ContentCard from './ContentCard';

/*--------------------*/
import data from './ContentData';
import ContentInput from './ContentInput';
import ContentFavorite from './ContentFavorite';




export default function Contents({contents}) { // {contents} is an array

  // initially, we want all baskets to be equal to "data"
  const [allbaskets,setAllContents] = useState(data);

  // this is for FAVORITE div, so I create a new STATE
  // the initial value will be blank, a BLANK ARRAY
  const [favoriteContents,setFavoriteContents] = useState([]);

  const getAllContents = () => {
    // console.log("all"); => output on F12
    setAllContents(data); // => when setAllContents === data
  }
  const getOnlyFruits = () => {
    // console.log("fruits"); => output on F12
    let filteredContents = data.filter(item=>item.type==="f")
    setAllContents(filteredContents); // => when setAllcontents === filteredContents
  }
  const getOnlyVeggies = () => {
    // console.log("veggies"); => output on F12
    let filteredContents = data.filter(item=>item.type==="v")
    setAllContents(filteredContents); // => when setAllContents === filteredContents
  }

/*-----------------------------------------------*/
  // FILTER by INPUT, when we type something in "input", it creates an "event"
  const handleFilter=(e)=>{
    // console.log("works"); output on F12
    // console.log(e.target.value)
    let filtered = data.filter(content=>content.basket.toLowerCase().includes(e.target.value.toLowerCase()));
    setAllContents(filtered); // => when setAllContents === filtered
  }

/*-----------------------------------------------*/
  // FAVORITE div
  const addToFavorites = (basket) => {
    const found = favoriteContents.some(content=>content.id===basket.id);
    if(!found){
      // ça peut s'écrire aussi:  if(found===false){
      // setFavoriteContents([basket]) // the newly clicked basket will always replace the basket formerly clicked
      // "..." SPREAD operator, so contents will keep adding
      setFavoriteContents([...favoriteContents,basket])
    }
  }

/*-----------------------------------------------*/
  // REMOVE function
  const removeFromFavorites = (basket) => {
    const updatedFavorites = favoriteContents.filter(content=>{
      return content.basket != basket.basket
      //   item's basket (VS) the basket I send
    })
    setFavoriteContents(updatedFavorites); // => when setFavoriteContents === updatedFavorites
  }



    return (
     <div>
        <ContentInput getAllContents={getAllContents} getOnlyFruits={getOnlyFruits} getOnlyVeggies={getOnlyVeggies} handleFilter={handleFilter} />
        <ContentFavorite favoritContents={favoriteContents} removeFromFavorites={removeFromFavorites} />

        <div className='contents-container'>

            {/* {
              allbaskets.map(item=>{
                // return <p>{basket.id}</p> =>  this shows all id numbers
                // ternary operation=>  (if this) ? (do this) : (else, do this)
                // below, if I wanna send (item), must write ()=> before "addToFavorites(item)"
                return <button onClick={()=>addToFavorites(item)} key={item.id} className={item.category==="fruit" ? "fruit-button" : "veggie-button"}>{item.basket}</button>
              })
            } */}

            {
                contents.map((content)=>{
                    return <ContentCard onClick={()=>addToFavorites(content)} className={content.category==="fruit" ? "fruit-button" : "veggie-button"} key={content.id} content={content} />
                })
            }
        </div>
    </div>
    )
}