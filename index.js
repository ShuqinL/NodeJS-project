#!/usr/bin/env node

//console.log("Hello, Node.JS!");

const validator = require("email-validator");
const axios = require("axios");
const chalk = require("chalk");
//to get the email adress
const askEmail = require("readline-sync");
const emailInput = askEmail.question("Please enter your email: ");



//style
const correctMessage = chalk.green.bgWhite;
const wrongMessage = chalk.red.bgWhite;


if(validator.validate(emailInput)){ 
    const encodeEmail = encodeURIComponent(emailInput);
    const url = "https://haveibeenpwned.com/api/v2/breachedaccount/"+encodeEmail;

    axios.get(url,{"headers":{"user-agent":"Node_CLI tool"}})
    .then(function(response){
        console.log(correctMessage("pwnage found!"));
    })
    .catch(function(error){
        console.log(wrongMessage("no pwnage found!"));
    });
}
