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
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "Error_GetItem");
  }
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "Error_CreateItems");
  }
};

const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate({ _id: id }, body);
    res.send({ data });
  } catch (err) {
    console.log(err)
    handleHttpError(res, "Error_UpdateItems");
  }
};
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({_id:id});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, "Error_DeleteItem");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
