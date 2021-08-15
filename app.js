// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

//Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successfull"))
  .catch((err) => console.log(err));

//Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup View Engine
app.set("view engine", "ejs");

//Setup Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Parse Cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//Routing Setup

//404 not found handler
app.use(notFoundHandler);

// common errors
app.use(errorHandler);

//Server
app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
