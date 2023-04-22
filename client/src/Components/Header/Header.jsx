// import { useState } from 'react';
import './Header.css';
import logo from '../../Utils/reddit-logo.png';
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';


const Header = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState('loggedOut');


    const loginBtnHandler = () => {
        navigate('/Login');
        setLogin('loggedIn');
    }

    if (login === 'loggedOut') {
        return (
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='login-signup-btn'>
                    <button onClick={loginBtnHandler}>Login</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='post-upload'>
                    <button>Add New Post</button>
                </div>
                <div className='login-signup-btn'>
                    <button >Logout</button>
                </div>
            </div>
        )
    }

}

export default Header;