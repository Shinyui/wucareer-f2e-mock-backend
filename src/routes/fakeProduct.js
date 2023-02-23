const express = require("express");
const {
  httpGetFakeProducstData,
  httpGetFakeProductData,
} = require("../controllers/fakeProduct");

const fakeProductRouter = express.Router();

fakeProductRouter.get("/products", httpGetFakeProducstData);
fakeProductRouter.get("/products/:id", httpGetFakeProductData);

module.exports = fakeProductRouter;
