const fakeProductData = require("../models/fake-data/fakeProductData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeProductData = (req, res) => {
  return res
    .status(StatusCodes.OK)
    .send({ message: ReasonPhrases.OK, data: fakeProductData });
};

module.exports = {
  httpGetFakeProductData,
};
