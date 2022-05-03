import React,{useState} from 'react';
import './contents.css';
import ContentCard from './ContentCard';
// import ContentInput from './z-ContentInput';



export default function Contents({contents}) { // {contents} is an array 

  const data = 'https://fruggie.herokuapp.com';

  // initially, we want all fruggies to be equal to "data"
  const [allcontents,setAllContents] = useState(data);

  // this is for FAVORITE div, so I create a new STATE
  // the initial value will be blank, a BLANK ARRAY
  // const [favoriteContents,setFavoriteContents] = useState([]);


  const getAllContents = () => {
    setAllContents(data); // => when setAllContents === data
  }
  const getOnlyFruits = () => {
    let filteredContents = data.filter(item=>item.category==="fruit")
    setAllContents(filteredContents); // => when setAllContents === filteredContents
  }
  const getOnlyVeggies = () => {
    let filteredContents = data.filter(item=>item.category==="vegetable")
    setAllContents(filteredContents); // => when setAllContents === filteredContents
  }

/*-----------------------------------------------*/
  // FILTER by INPUT, when we type something in "input", it creates an "event"
  const handleFilter=(e)=>{
    // console.log(e.target.value)
    let filtered = data.filter(item=>item.content.toLowerCase().includes(e.target.value.toLowerCase()));
    setAllContents(filtered); // => when setAllContents === filtered
  }


    return (
     <div className='all-contents-container'>
        {/* <ContentInput getAllContents={getAllContents} getOnlyFruits={getOnlyFruits} getOnlyVeggies={getOnlyVeggies} handleFilter={handleFilter} /> */}
        <div className='contents-container'>
            {
                contents.map((content)=>{
                   //  return <button onClick={()=>addToFavorites(item)} key={item.id} className={item.type==="f" ? "fruit-button" : "veggie-button"}>{item.basket}</button>
                   return <ContentCard key={content.id} content={content} />
                   // return <ContentCard content={content} /> (elif)
                })
            }
        </div>
    </div>
    )
}