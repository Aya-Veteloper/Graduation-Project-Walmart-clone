const express = require("express");
const router = express.Router();

const {
  getCategory,
  getAllCategory,
  createCategory,
} = require("../controllers/categoriesControl");

router.route("/").get(getAllCategory).post(createCategory);

module.exports = router;
