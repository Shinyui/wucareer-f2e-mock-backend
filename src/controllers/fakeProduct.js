const fakeProductData = require("../models/fake-data/fakeProductData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeProductData = (req, res) => {
  let { start, limit } = req.query;

  return res.status(StatusCodes.OK).send({
    message: ReasonPhrases.OK,
    data: fakeProductData.slice(start, limit),
  });
};

module.exports = {
  httpGetFakeProductData,
};
