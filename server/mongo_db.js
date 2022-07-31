const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = process.env.URL_DB;
const options = { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 1900 };
require('dotenv').config;
const mongooseConnect = require('./mongoConfig');
const UserDB = require('./db_models/User');

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongooseConnect();

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})

app.get(("/"), (req, res) => {
    res.send("1");
})

app.get("/users", (req, res) => {
    UserDB.findAllUsers()
    .then(response => res.send(response))
    .catch((error) => console.log(error));
})

app.post("/users", (req, res) => {
    res.send(req.body);
    var d = { "username": req.body.username, "files": req.body.file };
    console.log(d.files);
    UserDB.findUser(d.username)
    .then(response => {
        console.log(response);
        //user exists
        if (response.length > 0) {
            //add file
            if (!response[0].files.includes[req.body.file]) { (response[0].files).push(d.files); d.files = response[0].files; UserDB.updateUser(d); }

        }
        else UserDB.insertUser(d);
    })
    .catch((error) => console.log(error));
})

