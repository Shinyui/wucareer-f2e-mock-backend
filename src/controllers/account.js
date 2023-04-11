const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

const httpGetAccount = (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    user: fakeAuthData,
  });
};

const httpGetAccountWithID = (req, res) => {
  const { id } = req.params;

  const user = fakeAuthData.find((user) => {
    return user.id === parseInt(id);
  });

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: ReasonPhrases.NOT_FOUND,
    });
  }

  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    user,
  });
};

const httpPatchAccountwithID = (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const user = fakeAuthData.find((user) => user.id === parseInt(id));

  for (const key in update) {
    if (["user_name", "user_email", "password", "roles"].includes(key)) {
      user[key] = update[key];
    }
  }

  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
  });
};

module.exports = {
  httpGetAccount,
  httpGetAccountWithID,
  httpPatchAccountwithID,
};
