const fakeProductData = require("../models/fake-data/fakeProductData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeProductData = (req, res) => {
  const { start } = req.query;
  let hasNext = false;

  if (fakeProductData.slice(Number(start) + 4).length > 0) {
    hasNext = true;
  }

  return res.status(StatusCodes.OK).send({
    message: ReasonPhrases.OK,
    data: fakeProductData.slice(Number(start), Number(start) + 4),
    hasNext,
  });
};

module.exports = {
  httpGetFakeProductData,
};
