
const express = require("express");
const { createUser } = require("../BACKEND/controller/user");
const router = express.Router(); // Add parentheses here


router.post("/register", createUser);

module.exports = router;
