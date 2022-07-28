import React, { useState } from 'react';
import './sidebar.css';
import { Add } from '@mui/icons-material';
import { createTheme, makeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';

const NewFile = () => {

    const handleChange = () => {
        console.log("1");
    }

    const handleUpload = () => {
        console.log("1");
    }

    const handleNewFileOpening = () => {
        console.log("1");
    }

    return (
        <div className="new-file">
            <div className="new-file__container" onClick={ handleNewFileOpening }>
                <Add fontSize='large' />
                <p>New File</p>
            </div>
        </div>
    )
}

export default NewFile