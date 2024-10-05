const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error_registerCtrl");
    console.log(error);
  }
};

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel
      .findOne({ email: req.email })
      .select("password name role email");
    if (!user) {
      handleHttpError(res, "Usuario no existente.", 404);
      return;
    }
    const hashPassword = user.get("password");

    const check = await compare(req.password, hashPassword);
    if (!check) {
      handleHttpError(res, "Contraseña invalida.", 401);
      return;
    }
    const data = {
      token: tokenSign(user),
      user,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error_loginCtrl");
    console.log(error);
  }
};

module.exports = { registerCtrl, loginCtrl };
