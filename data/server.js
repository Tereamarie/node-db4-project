const express = require("express");
const morgan = require("morgan");
//const RecipeRouter = require("./recipes/recipe-router");

const server = express();
server.use(morgan("dev"));
server.use(express.json());
//server.use("/api/recipes", RecipeRouter);

module.exports = server;