import React, { useState, useEffect } from 'react';
import './view.css';
import axios from 'axios';

const View = (properties) => {

  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);

  const getAllUsers = async () => {
    axios.get("http://localhost:5000/users")
    .then(response => response.data)
    .then(response => { setUser(response.filter((user) => user.username === properties.user)[0]); setFiles(response.filter((user) => user.username === properties.user)[0].files) })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllUsers();
  }, [properties.user])

  return (
    <div id="view">
      { (properties.user !== null) 
      ? <><div id = "files-view__title">
          Your files
        </div>
      <div id = "files-view__row">
        { files.map((file, index) => {
          return <div className = "files-view__item" key = { index}  >{ file.split(".")[file.split(".").length - 2] }</div>
        }) }
      </div> 
      </>
      : <div id = "files_view_row">Login to add files</div> }
    </div>
  )
}

export default View