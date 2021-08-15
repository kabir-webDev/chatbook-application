const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

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

//Error Handling

//Server
app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
