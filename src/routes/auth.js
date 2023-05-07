const express = require("express");
const { httpPostLogin, httpRefreshPost } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/login", httpPostLogin);

authRouter.post("/refresh", httpRefreshPost);

module.exports = authRouter;
