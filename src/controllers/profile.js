const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

const httpGetProfile = (req, res) => {
  const user = res.locals.user;

  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    user,
  });
};

const httpPatchProfile = (req, res) => {
  const update = req.body;
  const user = fakeAuthData.find(
    (user) => user.user_email === res.locals.user.user_email
  );

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
  httpGetProfile,
  httpPatchProfile,
};
