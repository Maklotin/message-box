const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors())


const uri =
  "mongodb+srv://joklatin:kuben@jafar.0uqjftd.mongodb.net/test";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8001, () => {
  console.log("Server started on port 8000");
});