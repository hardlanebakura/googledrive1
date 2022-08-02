import React, { useState } from 'react';
import './sidebar.css';
import { Add } from '@mui/icons-material';
import { createTheme, makeProvider } from '@mui/material/styles';
import { Modal, Box, Typography } from '@mui/material';
import { ThemeProvider, makeStyles } from '@emotion/react';
import { orange } from '@mui/material/colors';
import axios from 'axios';

const NewFile = (properties) => {

    const [modalStyle] = useState(false);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const isLoggedIn = properties.user !== null;

    const handleNewFileClosing = () => {
        setOpen(false);
    }

    const handleNewFileOpening = () => {
        setOpen(true);
    }

    const handleUpload = (e) => {
        setFile(e.target.files[0]);
        setUploading(true);
        console.log(e.target.files[0]);
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        bgcolor: "background.paper"
    }

    const buttonTheme = createTheme({
        
        typography: {
            h6: {
                marginTop: 1,
                marginLeft: 1,
                paddingBottom: 2
            }
        },

    })

    const handleSubmit = (e) => {

        if (file !== null) {
            const d = { "username":properties.user, "file":file.name };
            axios({
                method: "post",
                url: "http://localhost:5000/users",
                headers: { "content-type": "application/json" },
                data: d
            })
            .then(response => response.data)
            .then(response => console.log(response))
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="new-file">
            <div className="new-file__container" onClick={ (isLoggedIn) ? handleNewFileOpening : undefined }>
                <Add fontSize='large' />
                <p>{ (isLoggedIn) ? <>New File</> : <>Login to add</> }</p>
            </div>
            <Modal 
                open={ open }
                onClose = { handleNewFileClosing }
                aria-labelledby = "modal-modal-title"
                aria-describedby = "modal-modal-description"
            >
                <Box sx = { style } >
                    <Typography id = "modal-modal-title" variant = "h6" component = "h2" sx = {{ mt:2, ml:4, pb:2 }} >
                        <input type = "file" onChange = { handleUpload } id = "file" accept = ".txt" />
                    </Typography>
                    <Typography id = "modal-modal-description" sx = {{ mt:2, ml:4, pb:2 }} >
                        <button onClick = { handleSubmit } >Upload</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default NewFile