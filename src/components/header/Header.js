import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../logo/google-drive.png';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon, HelpOutline, Settings, Apps } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Header = (properties) => {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (properties.user !== null) setIsLogged(true);
  })

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
          { (isLogged) ? <img src = "" alt="User Avatar" /> : <div className="header__login"><Link to="/login">Login</Link></div> }
        </div>
    </div>
  )
}

export default Header