const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/rogue")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((error) => {
    console.log("mongo db not connected", error);
  });

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  stock: {
    s: { type: Number, required: true },
    m: { type: Number, required: true },
    l: { type: Number, required: true },
    xl: { type: Number, required: true },
    xxl: { type: Number, required: true },
  },
  made: { type: String, required: true },
  price: { type: Number, required: true },
});

const products = mongoose.model("tshirts", Product);

module.exports = products;
