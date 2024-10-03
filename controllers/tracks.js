const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "Error_GetItems");
  }
};
const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "Error_CreateItems");
  }
};

const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
