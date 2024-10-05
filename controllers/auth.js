const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");

const createItem = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req,password}
    const dataUser = await usersModel.create(body);
    dataUser.set('password',undefined,{strict:false})
    const data = {
      token:await tokenSign(dataUser),
      user:dataUser
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error_CreateItems");
    console.log(error)
  }
};

module.exports = { createItem };
