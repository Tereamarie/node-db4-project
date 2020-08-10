const express = require("express");// initializing express
const server = express();// Creating an application here
const morgan = require("morgan");
//const RecipeRouter = require("./recipes/recipe-router");


//Logger  server passes off data to morgan then  morgan passes  off to routes 
server.use(morgan("dev"));

// converts to json object
server.use(express.json());
//server.use("/api/recipes", RecipeRouter);

//Root directory / route
server.use("/", (req, res) => {
    res.json({message: "API running better catch it!"});
});

module.exports = server;