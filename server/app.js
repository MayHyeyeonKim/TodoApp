const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter =require('./routes/index');
const cors = require('cors');
require('dotenv').config()
const app = express()
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD
// const MONGODB_URI = process.env.MONGODB_URI
// console.log("mongouri", MONGODB_URI_PROD)
app.use(bodyParser.json())
app.use(cors())
app.use('/api',indexRouter);

const mongoURI = MONGODB_URI_PROD;
// const mongoURI = MONGODB_URI
console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose
    .connect(mongoURI, {useNewUrlParser:true})
    .then(()=>{console.log("mongoose connected")})
    .catch((err)=>{console.log("DB connection fail", err)});

app.listen(process.env.PORT || 5050,()=>{console.log("server on");});

// register
// router
// model
// save data (check for existing user, encrypt password)
// response

//login
// 1. Set up the router
// 2. Read email and password information
// 3. Retrieve user information with the email
// 4. Compare the password stored in the database for this user with the password sent from the frontend
// 5. If they match, generate a token
// 6. If they don't match, send an error message
// 7. Send user information and token in the response

