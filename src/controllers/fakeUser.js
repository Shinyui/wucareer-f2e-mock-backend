const fakeUserData = require("../models/fake-data/fakeUserData");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const httpGetFakeUserData = (req, res) => {
  return res
    .status(StatusCodes.OK)
    .send({ message: ReasonPhrases.OK, data: fakeUserData });
};

module.exports = {
  httpGetFakeUserData,
};
