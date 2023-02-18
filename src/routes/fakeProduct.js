const express = require("express");
const { httpGetFakeProductData } = require("../controllers/fakeProduct");

const fakeProductRouter = express.Router();

fakeProductRouter.get("/product", httpGetFakeProductData);

module.exports = fakeProductRouter;
