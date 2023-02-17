const express = require("express");
const { httpGetFakeUserData } = require("../controllers/fakeUser");

const fakeUserRouter = express.Router();

fakeUserRouter.get("/user", httpGetFakeUserData);

module.exports = fakeUserRouter;
