// npm install axios 
import './App.css';
import React,{useEffect,useState} from 'react';
import { UserContext } from './context/UserContext';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import Contents from './components/Contents/Contents';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import ContentDetails from './components/Contents/ContentDetails';
import data from './components/Contents/ContentData';



function App() {

  // const baseUrl = 'https://travel-diaries-clems.herokuapp.com/'
  const baseUrl = 'http://localhost:5000';
  const [contents,setContents]=useState([]);
  const [user,setUser]=useState({});

  useEffect(()=>{
    axios.get(`${baseUrl}/contents`)
    .then(res=>{
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
                      <Route path="/contentdetails/:{baseUrl}.title" element={<ContentDetails contents={contents} />} />
                      <Route path="/add-content" element={<Form baseUrl={baseUrl} />} />
                  </Routes>
              <Footer />
          </BrowserRouter>
      </UserContext.Provider>
    </div>


  );
}

export default App;
