// import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import logo from '../../Utils/reddit-logo.png';
import { useState } from "react";
import "./Header1.css"

const Header1 = () => {


    const navigate = useNavigate();

    const onLogoutHandler = () =>{
        alert('logout successfuly')

        console.log(JSON.stringify(localStorage));
        localStorage.removeItem("user");  
  
        navigate('/');
    };

    const addPostHandler = () =>{
        navigate('/AddPost');}
    
    const onLoginHandler = ()=>{
        navigate("/Login");
    }

    // console.log(login);
    return (
        <div>
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={logo} alt="" onClick={()=>{ navigate("/posts")}}/>
                </div>
               
                <div className="login-signup-btn">
                    <button onClick={()=>{ navigate("/posts")}}>Posts</button>

                </div>
                
                {/* Only renders when the User is set in local storage ie if the user is logged in */}
                {(localStorage.getItem("user"))?
                <div className='post-upload'>
                    <button onClick={addPostHandler}>Add New Post</button>
                </div>:<></>
                }
                
                {/* Only renders when the User is set in local storage ie if the user is logged in */}
                {(localStorage.getItem("user"))?
                <div className='login-signup-btn'>
                    <button onClick={onLogoutHandler}>Logout</button>                  
                </div>
                :<></>
                }

                {/* Only renders when the User is NOT set in local storage ie if the user is loggedOUT  */}
                {(!localStorage.getItem("user"))?
                <div className='login-signup-btn'>
                    <button onClick={onLoginHandler}>Login</button>                  
                </div>
                :<></>
                }
            </div>

            
        </div>


    )
};

export default Header1;


// Removed Navbar 