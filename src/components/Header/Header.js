import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import './header.css';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';



export default function Header({baseUrl}) {
    const [signupSuccess,setSignupSuccess]=useState(false);
    const [loggedIn,setLoggedIn]=useState(false);
    const [modal,setModal]=useState(false);
    const [userExists,setUserExists]=useState(true);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [message,setMessage]=useState('');

    const {user,setUser}=useContext(UserContext);
    


    // handleSignup
    const handleSignup=(e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/user/register`,{
            username,password,imageUrl
        })
        .then(res=>{
            setSignupSuccess(true)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }

    // handleLogin
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/users/login`,{
            username,password
        })
        .then(res=>{
            setUser(res.data)
            setLoggedIn(true)
            setModal(false)
        })
        .catch(err=>console.log(err))
    }

    // handleLogout
    const handleLogout=()=>{
        setUser({})
        setLoggedIn(false)
    }


    return (
        <div className='header-container'>
            <div>
                <p className='fruggie-app'><a href="/">Fruggie App</a></p>
                <nav className='nav-container'>
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/contents">Contents</a>
                        {/* <li><a className="nav-link" href="/portfolio">Portfolio</a></li>
                        <li><a className="nav-link" href="/contact">Contact</a></li> */}
                </nav>
            </div>

            <div>
            {
                loggedIn ? 
                <div className='profile-container-loggedin'>
                    <button className='link-button'>
                        <Link to="/add-content"><span><p>Add a new fruggie</p></span></Link>
                    </button>
                        <div className='img-container'>
                            <p>Welcome</p>
                            <p className='username'>{user.username}</p>
                            <img src={user.imageUrl} alt='avatar' />
                        </div>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div> 

                : <div className='profile-container-loggedout'>
                        <p className='login-to-add'>Login to add contents</p>
                        <button className='login-btn' onClick={()=>setModal(!modal)}>Login</button>
                  </div>
            }
            
            {
                modal ? 
                <div className='header-modal'>
                  <h3 onClick={()=>{setModal(false)}}>X</h3>
                    {
                        userExists ?
                        <div>
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
                                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                                <button type="submit" className='login-btn' onChange={(e)=>setImageUrl(e.target.value)}>Submit</button>
                            </form>
                            
                            <div>
                                <p className='dont'>Don't have an account?</p><br/>
                                <p><span onClick={()=>{setUserExists(false)}}>Sign up</span></p><br/>
                                {message !== '' ? <p>{message}</p> : null}
                            </div>

                        </div>
                        
                        : <div>
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSignup}>
                                <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
                                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                                <input type="text" placeholder="Enter your image url" onChange={(e)=>setImageUrl(e.target.value)} />
                                <button type="submit" className='login-btn'>Submit</button>
                            </form>

                            {
                                signupSuccess ? 
                                <p style={{"color":"green"}}>Signed up successfully. <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                                : 
                                <div>
                                    <p className='already'>Already have an account?</p>
                                    <p><span onClick={()=>{setUserExists(true)}}>Login</span></p>
                                </div>
                                
                                
                                
                            }
                          </div>
                    }
                </div> 

                : null
            }
            </div>
            


        </div>
    )
}