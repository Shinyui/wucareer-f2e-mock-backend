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

  const access = jwt.sign(user, keys.jwtSecret, {
    expiresIn: keys.jwtAccessExpire,
  });

  const refresh = jwt.sign(user, keys.jwtSecret, {
    expiresIn: keys.jwtRefreshExpire,
  });

  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    access,
    refresh,
  });
};

const httpRefreshPost = (req, res) => {
  try {
    const { refresh } = req.body;

    const user = jwt.verify(refresh, keys.jwtSecret);

    const access = jwt.sign({ id: user.id }, keys.jwtSecret, {
      expiresIn: keys.jwtAccessExpire,
    });

    return res.status(StatusCodes.OK).json({
      message: ReasonPhrases.OK,
      access,
    });
  } catch (error) {
    if (error.message === "jwt expired") {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: error.message,
      });
    }

    if (error.message === "invalid signature") {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: error.message,
      });
    }

    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: ReasonPhrases.UNAUTHORIZED,
    });
  }
};

module.exports = {
  httpPostLogin,
  httpRefreshPost,
};
