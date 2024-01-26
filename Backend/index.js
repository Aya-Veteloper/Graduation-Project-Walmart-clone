const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

//using express
const app = express();
//Routs
const category = require("./routes/categoriesRouts");
const subcategory = require("./routes/subcategoryRouts");
const carts = require("./routes/cartsRouts");
const coupons = require("./routes/couponsRouts");
const productsRouts = require("./routes/productsRouts");

//express middleware
app.use(express.json());
app.use(cors());
//routs for All Project routes
app.use("/Categories", category);
app.use("/subcategory", subcategory);
app.use("/Carts", carts);
app.use("/Coupons", coupons);

//mongoose database
mongoose
  .connect(process.env.MONGOOSEURL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });

app.use("/products", productsRouts);
// if path is not specified
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Not Found path" });
});
// error handling
app.use((err, res, req, next) => {
  res.status(500).json({ message: "routs not found" });
});
//listening
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
