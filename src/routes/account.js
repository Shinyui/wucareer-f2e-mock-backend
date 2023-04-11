const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const verifyRoles = require("../middlewares/verifyRoles");
const {
  httpGetAccount,
  httpGetAccountWithID,
  httpPatchAccountwithID,
} = require("../controllers/account");

const accountRouter = express.Router();

accountRouter.get("/", verifyToken, verifyRoles(["admin"]), httpGetAccount);

accountRouter.get(
  "/:id",
  verifyToken,
  verifyRoles(["admin"]),
  httpGetAccountWithID
);

accountRouter.patch(
  "/:id",
  verifyToken,
  verifyRoles(["admin"]),
  httpPatchAccountwithID
);

module.exports = accountRouter;
