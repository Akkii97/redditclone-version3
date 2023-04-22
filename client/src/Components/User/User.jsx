import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import { useState } from 'react';
import './User.css';
import Header1 from '../Header/Header1';


const User = ()=>{

    return(

        // only renders header if the user is logged in!! don't change the logic here unless you really know what you are doing!! 
    localStorage.getItem('user')?<div><Posts /></div>:<Header1/>
    )

    };

export default User;