const express = require("express");
const morgan = require("morgan");
const fakeUserRouter = require("./routes/fakeUser");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use("/fake", fakeUserRouter);

module.exports = app;
