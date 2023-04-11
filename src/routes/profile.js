const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { httpGetProfile, httpPatchProfile } = require("../controllers/profile");

const profileRouter = express.Router();

profileRouter.get("/", verifyToken, httpGetProfile);
profileRouter.patch("/", verifyToken, httpPatchProfile);

module.exports = profileRouter;
