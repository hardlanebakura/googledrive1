import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../logo/google-drive.png';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon, HelpOutline, Settings, Apps } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Header = (properties) => {

  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (properties.user !== null) setIsLogged(true);
  }, [])

  const handleSearch = (e) => {
    console.log("1");
  }

  const useStyles = makeStyles({

    root: {
      background: 'linear-gradient(45deg, #333, #999)',
      border: '0',
      borderRadius: '15px',
      color: 'orange',
      padding: '0 30px',
      height: '37px'
    }

  })

  const handleMenu = (e) => {
    (e.target.nextElementSibling.style.display == "block") ? e.target.nextElementSibling.style.display = "none" : e.target.nextElementSibling.style.display = "block";
  }

  const handleLogoutKey = (e) => { setIsLogged(false); }

  return (
    <div className="header">
        <div className="header__logo">
          <img src = { logo } alt = "" />
          <span>Drive</span>
        </div>
        <div className="header__search-container">
          <div className="header__searchbar" style = {{ padding: "4px" }}>
            <SearchIcon />
            <TextField variant = "filled" placeholder = "search in Drive" onChange={ handleSearch } />
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="header__icons">
          <span>
            <HelpOutline />
            <Settings />
          </span>

          <Apps />
          { (isLogged) ? <div id = "user-info__container"><div id="user-avatar" onClick = { handleMenu } >{ properties.user[0] }</div><div id="logout" onClick = { handleLogoutKey } >Logout</div></div> : <div className="header__login"><Link to="/login">Login</Link></div> }
        </div>
    </div>
  )
}

export default Header