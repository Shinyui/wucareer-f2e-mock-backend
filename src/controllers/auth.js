const jwt = require("jsonwebtoken");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const keys = require("../config/keys");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

const httpPostLogin = (req, res) => {
  const { email, password } = req.body;

  const user = fakeAuthData.find((user) => user.user_email === email);

  if (!user || user.password !== password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "email or password might be wrong",
    });
  }

  const token = jwt.sign({ id: user.id }, keys.jwtSecret, {
    expiresIn: keys.jwtExpire,
  });

  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    jwt: token,
  });
};

module.exports = {
  httpPostLogin,
};
