const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require('https')
const axios = require('axios')
const db = require('mysql2')


const app = express();

const url = "https://v2.jokeapi.dev/joke/Dark"

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    const initialData = {
        setup: "Initial Setup",
        delivery:"Initial Delivery"

    }
    
    res.render('index.ejs', initialData)
})

app.post("/",  async (req,res) => {
    const response = await axios.get(url)
    const jokesData = response.data
    let relevantData = {}
    if (jokesData.type === 'twopart'){
        relevantData = {
            setup:jokesData.setup,
            delivery:jokesData.delivery
    }
    
    } else{
        relevantData = {
            setup:jokesData.joke,
            delivery: "none"
        }
    }

    
    res.render("index.ejs", relevantData)
 })

    







app.listen(3000, function () {
    console.log("Server started on port 3000");
});
