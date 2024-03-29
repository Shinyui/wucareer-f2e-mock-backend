const fakeProductData = require("../models/fake-data/fakeProductData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeProducstData = (req, res) => {
  let { start } = req.query;
  let hasNext = false;

  if (start === undefined) {
    return res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
      data: fakeProductData,
    });
  }

  if (fakeProductData.slice(Number(start) + 4).length > 0) {
    hasNext = true;
  }

  return res.status(StatusCodes.OK).send({
    message: ReasonPhrases.OK,
    data: fakeProductData.slice(Number(start), Number(start) + 4),
    hasNext,
  });
};

const httpGetFakeProductData = (req, res) => {
  const id = req.params.id;

  return res.status(StatusCodes.OK).send({
    message: ReasonPhrases.OK,
    data: fakeProductData[Number(id) - 1] || {},
  });
};

module.exports = {
  httpGetFakeProducstData,
  httpGetFakeProductData,
};
