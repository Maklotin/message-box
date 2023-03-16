const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors())

app.get('/', cors(), async (req, res) => {
    const antallProdukter = 10;
    const page = req.query.url
    const response = await axios.get(page);

    console.log(page)

    const html = response.data;

    const $ = cheerio.load(html);

})

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

app.listen(8000, () => {
  console.log("Server started on port 8000");
});