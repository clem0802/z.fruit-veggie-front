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
    const [userExists,setUserExists]=useState(false); //
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
        // below added 2022.05.05 
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
            localStorage.setItem('user',JSON.stringify(res.data)) // 2022.05..11(elif)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        const currentUser = localStorage.getItem('user') // 2022.05..11(elif)  
        if(currentUser){
            setUser(JSON.parse(currentUser))
            setLoggedIn(true)
        }
    }, [])



    // handleLogout
    const handleLogout=()=>{
        setUser({})
        setLoggedIn(false)
        localStorage.removeItem('user')
    }


    return (
      <div className='header-container'>

        <div className="flex items-center justify-between py-8">
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">        
                    <div className={isNavOpen ? "hideMenuNav" : "showMenuNav"}>
                        <div
                            className="absolute ml-6 space-y-2" 
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
                                style={{color: "rgb(159, 2, 2)"}}
                                onClick={() => setIsNavOpen(false)}>X 
                            </div>
                            <div>
                                <ul className="MENU-LINK-MOBILE-OPEN absolute top-0 right-13 px-8 py-5 min-h-[150px]">
                                {/* <ul className="MENU-LINK-MOBILE-OPEN flex flex-col text-sm min-h-[150px]"> */}
                                    <li className="my-2"><a href="/">Home</a></li>
                                    <li className="my-2"><a href="/contents">Contents</a></li>
                                    <li className="my-2"><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                    </div>
                </section>
                

                <ul className="DESKTOP-MENU hidden space-x-6 lg:flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contents">Contents</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

<style>{`
.hideMenuNav {
    display: none;
}
.showMenuNav {
    top: 0;
    left: 6;
    display: flex;
    align-items: center;
}
`}</style>
        </div>


        <div>
        {
            loggedIn ? 
            <div className='profile-container-loggedin'>
                <button className='link-button'>
                    <Link to="/add-content"><span><p>Add a fruggie</p></span></Link>
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
            <div className='header-modal' id="modal-guts">
                {
                    userExists ?
                    <div>      
                        <div className='LOGIN-title'>
                            <p>Login</p><br/>
                            <form onSubmit={handleLogin}>
                                <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
                                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                                <button type="submit" className='login-btn' onChange={(e)=>setImageUrl(e.target.value)}>Submit</button>
                            </form>
                        </div><br/>
                        
                        <div className='X-signup'>
                            <p className='dont'>Don't have an account?</p><br/>
                            <div>
                                <h3 onClick={()=>{setModal(false)}}>X</h3>
                                <p><span onClick={()=>{setUserExists(false)}}>Sign up</span></p><br/>
                                {message !== '' ? <p>{message}</p> : null}
                            </div>
                        </div>
                    </div>
                    
                    : <div className='submit-div' >
                        <div className='SIGNUP-title'>
                            <p>Sign Up</p><br/>
                            <form onSubmit={handleSignup}>
                                <input className='' type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
                                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                                <input type="text" placeholder="Enter your image url" onChange={(e)=>setImageUrl(e.target.value)} />
                                <button type="submit" className='login-btn'>Submit</button>
                            </form>
                        </div><br/>

                        {
                            signupSuccess ? 
                            <div>
                                <p className='already' style={{"color":"greenyellow", "fontSize":18}}>Signed up successfully.</p>
                                <p><span onClick={()=>{setUserExists(true)}}>Login</span>
                            </p>
                            </div>

                            : 
                            <div className='X-login'>
                                <p className='already'>Already have an account?</p>
                                <div>
                                    <h3 onClick={()=>{setModal(false)}}>X</h3>
                                    <p><span onClick={()=>{setUserExists(true)}}>Login</span></p>
                                </div>
                                
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