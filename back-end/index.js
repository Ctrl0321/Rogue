const express = require("express");
const cors = require("cors");
const products = require("./tshirt");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

// API routes
app.get("/tshirt", (req, res) => {
  products
    .find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error [server]" });
    });
});

app.listen(8001, () => {
  console.log("server is running");
});
