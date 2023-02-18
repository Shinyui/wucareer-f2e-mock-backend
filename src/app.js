const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fakeUserRouter = require("./routes/fakeUser");
const fakeTodoRouter = require("./routes/fakeTodo");
const fakeProductRouter = require("./routes/fakeProduct");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/fake", fakeUserRouter);
app.use("/fake", fakeTodoRouter);
app.use("/fake", fakeProductRouter);

module.exports = app;
