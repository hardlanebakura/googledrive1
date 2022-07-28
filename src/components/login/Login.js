import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../logo/google-logo.jpg';
import loginIcon from '../../logo/login-icon.jpg';
import passwordIcon from '../../logo/password-icon.jpg';
import axios from 'axios';

const Login = () => {

  const [users, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = () => {
    axios.get("http://localhost/googledrive1/api/api_items.php")
    .then(response => response.data)
    .then(response => { console.log(response); setAllUsers(response); })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some((obj) => obj.username === document.getElementById("user").value);
    if (userExists) { 
        if (document.getElementById("error_no_user_with_that_username") !== null) document.getElementById("error_no_user_with_that_username").remove();
        //login if password matches
        if (document.getElementById("pass").value === (users.filter((x) => x.username === document.getElementById("user").value)[0].password)) navigate("/", {state:{user:document.getElementById("user").value}}); 
        else if (document.getElementById("wrong_password_for_that_user") === null) document.getElementById("pass").parentNode.insertAdjacentHTML("afterend", `<div class = 'error' id = 'wrong_password_for_that_user'>Wrong password</div>`);    
    }
    else {
        if (document.getElementById("error_no_user_with_that_username") === null) document.getElementById("user").parentNode.insertAdjacentHTML("afterend", `<div class = 'error' id = 'error_no_user_with_that_username'>No user with that username</div>`);
    }
  }

  return (
    <div className="login__wrapper">
        <div className="login">
        <div className = "login__header">
             <img src = { logo } />
        </div>
            <div className = "login__inputs">
                <form action = "/login" method = "POST" >
                    <div className = "input__wrapper">
                        <img className = "input__wrapper__img" src = { loginIcon } />
                        <input className = "login__form" type = "text" id = "user" name = "username_1" placeholder = "Username"/>
                    </div>
                    <div className = "input__wrapper">
                        <img className = "input__wrapper__img"  src = { passwordIcon } />
                        <input className = "login__form" type = "password" id = "pass" name = "password_1" placeholder = "Password"/>
                    </div>
                    <div className = "login-button__wrapper">
                        <input className = "login-button changetodoonhover" type="submit" value = "LOGIN" name = "submit" onClick = { handleSubmit } />
                    </div>
                </form>
                <div className = "loginadditional">
                    <div className = "recovery">
                        Forgot your password?
                    </div>
                    <div className = "linktoregister">
                        <a href = "/register">Register</a>
                    </div>
                    <div className = "conditions">
                        Terms and Conditions
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login