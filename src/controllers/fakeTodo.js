const fakeTodoData = require("../models/fake-data/fakeTodoData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeTodoData = (req, res) => {
  return res
    .status(StatusCodes.OK)
    .send({ message: ReasonPhrases.OK, data: fakeTodoData });
};

module.exports = {
  httpGetFakeTodoData,
};
