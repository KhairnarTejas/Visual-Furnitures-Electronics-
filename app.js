const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

// Set up views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride("_method"));

// MongoDB connection
const dbUrl = "mongodb://localhost:27017";

async function main() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to database.");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}
main();

// Require product router
const productRouter = require("./routes/product.js");
app.use("/product", productRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
