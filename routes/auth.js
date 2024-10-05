const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { createItem } = require("../controllers/auth");

router.post("/register", validatorRegister, createItem);

module.exports = router;
