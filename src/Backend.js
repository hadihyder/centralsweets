"use strict"

const firebase = require('firebase')
const nodemailer = require('nodemailer')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors);

let transporter = nodemailer.createTransport({
    host: "mail.spm.technofiz.com",
    // port: 26,
    secure: false,
    auth: {
        user: "test@spm.technofiz.com",
        pass: "test@123"
    },
    tls:{
        rejectUnauthorized: false
    }
})

var firebaseConfig = {
    apiKey: "AIzaSyCyDiJnLKKLez97A_LMCw_XlDQMbARmQFU",
    authDomain: "central-sweets.firebaseapp.com",
    databaseURL: "https://central-sweets.firebaseio.com",
    projectId: "central-sweets",
    storageBucket: "central-sweets.appspot.com",
    messagingSenderId: "510296463254",
    appId: "1:510296463254:web:7e69806485f8e37cfeafb7"
  };
firebase.initializeApp(firebaseConfig);


app.get("*", function(req, res){
    let {name, message, email} = req.query;
    console.log(`Name: ${name}`);
    let mailOptions = {
        from: "test@spm.technofiz.com",
        to: "hyderhadi123@gmail.com",
        subject: "Website Form",
        text: `Name: ${name}\n Message:${message}\n Email: ${email}`
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        } else {
            console.log("Email sent: " + info.response);
            firebase.database().ref(`messages/${name}`)
	    .set({
        	details: {
           		 email, message
        	}
       	 })
        .then(() => res.send("Done\n"))
        }
    })
})

module.exports = app;
