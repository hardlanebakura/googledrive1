import React, { useState, useEffect } from 'react';
import './register.css';
import { TextField } from '@mui/material';
import loginIcon from '../../logo/login-icon.jpg';
import passwordIcon from '../../logo/password-icon.jpg';
import emailIcon from '../../logo/email-icon.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [users, setAllUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleAllErrors = (e, condition, err) => {
    const errors = { 
      "Email is not unique" : "error_not_unique_email",
      "Invalid email" : "error_email_is_invalid",
      "Username is not unique" : "error_not_unique_user",
      "Username is too short" : "error_username_is_too_short",
      "Username is too long" : "error_username_is_too_long",
      "Password is too short" : "error_password_is_too_short",
      "Password is too long" : "error_password_is_too_long",
      "Passwords do not match" : "error_passwords_not_match"
     };
    var error = document.getElementById(errors[err]);
    if (condition) { if (error === null) e.target.parentNode.parentNode.parentNode.insertAdjacentHTML("afterend", `<div class = 'error' id = ${errors[err]}>${err}</div>`); }
    else if (error !== null) error.remove();
  }

  const handleEmail = (e) => {
    handleAllErrors(e, !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)), "Invalid email");
    handleAllErrors(e, users.some((obj) => obj.email === e.target.value), "Email is not unique");
    setEmail(e.target.value);
  }

  const handleUser = (e) => {
    handleAllErrors(e, users.some((obj) => obj.username === e.target.value), "Username is not unique");
    handleAllErrors(e, e.target.value.length < 7, "Username is too short");
    handleAllErrors(e, e.target.value.length > 12, "Username is too long");
    setUsername(e.target.value);
  }

  const handlePass = (e) => {
    handleAllErrors(e, e.target.value.length < 7, "Password is too short");
    handleAllErrors(e, e.target.value.length > 12, "Password is too long");
    handleAllErrors(e, document.getElementById("psw1").value !== document.getElementById("psw2").value, "Passwords do not match");
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    var allInputFieldsAreFilled = true;
    Array.from(document.getElementsByTagName("input")).forEach(input => { if (input.value === "") allInputFieldsAreFilled = false });
    if (allInputFieldsAreFilled && document.getElementsByClassName("error").length === 0) { postResults(); navigate("/"); }
  }

  const postResults = (e) => {
    console.log("Successful!");
    const formData = {"email": email, "username": username, "password": password};
    axios({
      method: "POST",
      url: "http://localhost/googledrive1/api/add_data_to_db.php",
      headers: { "content-type": "application/json" },
      data: formData
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  }

  return (
    <div className="register__wrapper">
        <div className="register">
          <div className = "register__title">
              Sign up
          </div>
          <form action = "/register" method = "POST" id = "form">
            <div className = "input-wrapper">
              <img className = "input-wrapper__img"  src = { emailIcon } />
              <TextField variant = "filled" type = "email" placeholder = "Select email" onChange={ handleEmail } />
            </div>
            <div className = "input-wrapper">
              <img className = "input-wrapper__img"  src = { loginIcon } />
              <TextField variant = "filled" placeholder = "Username" onChange={ handleUser } />
            </div>
            <div className = "input-wrapper">
              <img className = "input-wrapper__img"  src = { passwordIcon } />
              <TextField variant = "filled" id = "psw1" placeholder = "Password" onChange={ handlePass } />
            </div>
            <div className = "input-wrapper">
              <img className = "input-wrapper__img"  src = { passwordIcon } />
              <TextField variant = "filled" id = "psw2" placeholder = "Password" onChange={ handlePass } />
            </div>
            <div className = "have-account__wrapper">
              <div className = "have-account">
                  Already have an account?
              </div>
              <div className = "have-account__login">
                  <a href = "/login">Log in</a>
              </div>
            </div>
            <input type = "submit" className = "register_button" name = "submit" value="Submit" onClick = { handleSubmit } />
          </form>
        </div>
    </div>
  )
}

export default Register