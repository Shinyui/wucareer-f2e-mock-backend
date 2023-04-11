const jwt = require("jsonwebtoken");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const keys = require("../config/keys");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

const verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
      });
    }

    const bearer = bearerHeader.split(" ")[1];
    const result = jwt.verify(bearer, keys.jwtSecret);

    res.locals.user = fakeAuthData.find((user) => user.id === result.id);

    next();
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

module.exports = verifyToken;
