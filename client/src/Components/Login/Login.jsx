import './Login.css';
import Users from '../../Utils/Users';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Header1 from '../Header/Header1';

const Login = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onFormSubmitHandler = (e) => {
        e.preventDefault();

    //   this is a bad logic this gives one time successfull alert and mutiple times unsuccessfull alert.
            Users.map((user,index) => {
                while(email === user.email && password === user.password){
                    alert('login Successfully');
                    // props.loginCheck('loggedIn');
                    localStorage.setItem("user", "12345");
                    navigate('/User');
                    break;   
                }
                alert("password /Email is incorrect");
            })

    }




    const handlerEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>

        {/* Logical check to render components as per logged in or non logged in user. */}
         {(!localStorage.getItem("user"))?
         <>
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={onFormSubmitHandler}>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input onChange={handlerEmailChange} type="email" placeholder="Enter your Email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input onChange={handlePasswordChange} type="password" placeholder="Enter your Password" name="password" />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
            
        </div></>: <div className='logged-in'><p><h2> You are already Logged In! Nothing to worry! </h2></p></div>}
        </>
    )
};

export default Login;