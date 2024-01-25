const CategoryModel = require("../models/categoriesModel");
//middleware catch error
const asyncHandler = require("express-async-handler");

exports.getAllCategory = asyncHandler(async (req, res) => {
  //pagination
  const page = req.query.page * 1 || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ result: categories.length, page, data: categories });
});

exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({ name });
  res.status(201).json({ data: category });
});
