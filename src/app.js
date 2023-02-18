const express = require("express");
const morgan = require("morgan");
const fakeUserRouter = require("./routes/fakeUser");
const fakeTodo = require("./routes/fakeTodo");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use("/fake", fakeUserRouter);
app.use("/fake", fakeTodo);

module.exports = app;
