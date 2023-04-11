const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const verifyRoles = (expectedRole) => {
  return (req, res, next) => {
    const user = res.locals.user;

    const result = user.roles.some((role) => {
      return expectedRole.includes(role);
    });

    if (!result) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: ReasonPhrases.UNAUTHORIZED,
      });
    }

    next();
  };
};

module.exports = verifyRoles;
