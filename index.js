//Create a web server to listen to incoming request
//Use express.js to enable it

//Using "type" : "commonjs"
// const express = require("express");

//using "type" : module in package.json
import express from "express";
import os from 'os';
import cors from "cors"; //prevent cross-site scripting

const PORT = 8888;          // create a custom port that the app listens to
const HOST = "127.0.0.1";   // domain (ip address)  
const OS = os ; // logging the platform running the server
const ENV = "DEV";          // set the mode of development of this project (nothing to do with .env, DEV, UAT, PROD)

const app = express();      // invoke express library to be consume to run the web server
app.use(cors());              // allow our app use cors library
app.use(express.json());       // middleware to handle JSON data

// Create endpoints that this application listens to  GET. POST. PUT .DELETE
// Listen to a GET request
app.get("/",(req, res ) => {           //Listen to GET request (root directory of the application "/")
  res.statusCode = 200;                //let front-end application to know what to do next, 200(success), 201(no-content) ,404(not-found), 403 (permission-deny),
  const msg = "Hello FSD Learner. Running Node.js."
  res.send(msg);               //res.status(200).send(msg);
});

//can install node mon to automatically restart the node application when file changes in directory
// activate with npx nodemon index.js

app.get("/about", (req, res) =>{    // view at http://127.0.0.1:8888/about
    res.statusCode = 200;         
    const msg = "About this web site";
    res.send(msg);
})

app.post("/login", (req, res) =>{     //post , to send the uname and pw
    const psdUsername = "user1";
    const psdPassword = "1234"; 
    const {username, password} = req.body;

    if(username === psdUsername && password === psdPassword)
       return  res.status(200).send({msg:"You have logged in successfully"});

    return res.status(403).send({msg:"Permission denied. Please try again."});
})
//Start app to listen via PORT and HOST (https://127.0.0.1:8888)
app.listen(PORT, HOST); //check by  running index.js  then going to 127.0.0.1:8888 to view, end by ctrl + C
console.log(`.Running service on: ${HOST}:${PORT} on os ${OS.platform()}.`);




