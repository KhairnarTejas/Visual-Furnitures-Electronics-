const mongoose = require("mongoose");
const initData = require("./data.js");  
const Electronic = require("../models/electronic.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/visual";  


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

const initDB = async() =>{          

    await Electronic.deleteMany({});               //clears all the sample data which we have inserted earlier

    await Electronic.insertMany(initData.data);     //.data beacause we have stored sampleListings in data key
    console.log("Data was initialized");
};

initDB();  