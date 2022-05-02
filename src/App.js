// npm install axios 
import './App.css';
import React,{useEffect,useState} from 'react';
import { UserContext } from './context/UserContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import Contents from './components/Contents/Contents';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import ContentDetails from './components/Contents/ContentDetails';
import Contact from './components/Contact/Contact';
import FavoriteContents from './components/Contents/z-FavoriteContents';



function App() {

  const baseUrl = 'https://fruggie.herokuapp.com'
  // const baseUrl = 'http://localhost:5000';
  const [contents,setContents]=useState([]);
  const [user,setUser]=useState({});

  useEffect(()=>{
    axios.get(`${baseUrl}/contents`)
    .then(res=>{
      // console.log(res.data)
      setContents(res.data)
    })
    .catch(err=>console.log(err))
  }, [])

  
  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
          <BrowserRouter>
              <Header baseUrl={baseUrl} />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contents" element={<Contents contents={contents} />} />
                      <Route path={`/contentdetails/:title`} element={<ContentDetails contents={contents} baseUrl={baseUrl} />} />
                      <Route path="/add-content" element={<Form baseUrl={baseUrl} />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              <Footer />
          </BrowserRouter>
      </UserContext.Provider>
    </div>


  );
}

export default App;
