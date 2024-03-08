const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const path = require("path");                        
app.set("views" , path.join(__dirname , "views"));   
app.set("view engine" , "ejs");

const Electronic = require("./models/electronic.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/visual";

const methodOverride = require("method-override"); 
app.use(methodOverride("_method"));            


const ejsMate = require("ejs-mate");       
app.engine("ejs" , ejsMate);

app.use(express.static(path.join(__dirname , "public")));  
require('dotenv/config')
// const api =process.env.API_URL

main()                                  
.then(()=>{

    console.log("Connect to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {                       
    await mongoose.connect(MONGO_URL);
      
}

//Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get(`/`,(req,res) => {
    const product ={
        id: 1,
        name: 'Fridge',
        image: 'url',
    }
    res.send(product);
})
app.listen(3000, ()=>{
    console.log("Server is running on port : 3000")
})