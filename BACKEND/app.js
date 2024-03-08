const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv/config')
// const api =process.env.API_URL


//Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get(`/`,(req,res) => {
    const product ={
        id: 1,
        name: 'Fridge',
        image: 'url',
    }
    res.send(product)
})
app.listen(3000, ()=>{
    console.log("Server is running on port : 3000")
})