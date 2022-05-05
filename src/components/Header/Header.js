// https://www.youtube.com/watch?v=Pp-xLBKejXY&ab_channel=e-side (youtube tuto)
// npm i react-router-dom
// npm i @material-ui/core
// npm i @material-ui/icons
/*-----------------------------------------*/
// (TAKE OFF)
// "@material-ui/core": "^4.12.3",
// "@material-ui/icons": "^4.11.2",
/*-----------------------------------------*/
// Terminal
// > npm install -D tailwindcss postcss autoprefixer
// > npx tailwindcss init
// https://medium.com/@designbygio/hamburger-menu-with-react-and-tailwind-css-7ddd8c90a082


import { Link } from 'react-router-dom';
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import './header.css';
import { UserContext } from '../../context/UserContext';
// import './header.scss';



export default function Header({baseUrl}) {
    const [signupSuccess,setSignupSuccess]=useState(false);
    const [loggedIn,setLoggedIn]=useState(false);
    const [modal,setModal]=useState(false);
    const [userExists,setUserExists]=useState(true);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [message,setMessage]=useState('');
/*--------------------------------------------------*/
    const {user,setUser}=useContext(UserContext);
/*--------------------------------------------------*/
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


    // handleSignup
    const handleSignup=(e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/users/register`,{
            username,password,imageUrl
        })
        .then(res=>{
            setSignupSuccess(true)
            console.log(res.data)
        })
        // .catch(err=>console.log(err))
        // below added 2022.05.05 (elif)
        .catch(err=>{
            if(err.response.status === 400){
                alert("Username already exists")
            } else {
                console.log(err)
            }
        })
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


        <div className="flex items-center justify-between py-8">
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div className={isNavOpen ? "hideMenuNav" : "showMenuNav"}>
                        <div
                            className="HAMBURGER-ICON space-y-2" 
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >  
                            <span className="block h-1 w-8 bg-white"></span>
                            <span className="block h-1 w-8 bg-white"></span>
                            <span className="block h-1 w-8 bg-white"></span>
                        </div>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                            <div
                                className="CROSS-ICON absolute top-0 right-13 px-8 py-5"
                                style={{color: "red"}}
                                onClick={() => setIsNavOpen(false)}>X 
                            </div>
                            <div>
                                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col text-sm min-h-[150px]">
                                    <li className="my-2"><a href="/">Home</a></li>
                                    <li className="my-2"><a href="/contents">Contents</a></li>
                                    <li className="my-2"><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                    </div>
                </section>
                

                <ul className="DESKTOP-MENU hidden space-x-6 lg:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/contents">Contents</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

<style>{`
.hideMenuNav {
    display: none;
}
.showMenuNav {
    display: block;
    position: absolute;
    width: 40%;
    height: 50vh;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
`}</style>
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
                        {/* <p className='login-to-add'>Login to add contents</p> */}
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
                                <input className='' type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
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