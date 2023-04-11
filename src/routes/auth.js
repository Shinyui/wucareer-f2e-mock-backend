const express = require("express");
const { httpPostLogin } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/login", httpPostLogin);

module.exports = authRouter;
