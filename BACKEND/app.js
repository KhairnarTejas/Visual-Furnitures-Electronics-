
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
                      
app.set("views" , path.join(__dirname , "views"));   
app.set("view engine" , "ejs");

const Electronic = require("./models/electronic.js");
const User = require("./routes/user.js");
// const dbUrl = process.env.ATLAS_URL


app.use(methodOverride("_method"));            

      
app.engine("ejs" , ejsMate);

app.use(express.static(path.join(__dirname , "public")));  
require('dotenv/config')
// const api =process.env.API_URL
dbUrl ="mongodb://localhost:27017";

main()
    .then(() => {
        console.log("Connected to db.");
    })
    .catch(err => console.log(err));

async function main() {
    await  mongoose.connect(dbUrl);
}


//Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))


app.use("/api/user", authRouter)
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