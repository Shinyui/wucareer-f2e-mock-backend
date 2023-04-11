const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fakeUserRouter = require("./routes/fakeUser");
const fakeTodoRouter = require("./routes/fakeTodo");
const fakeProductRouter = require("./routes/fakeProduct");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const accountRouter = require("./routes/account");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/fake", fakeUserRouter);
app.use("/fake", fakeTodoRouter);
app.use("/fake", fakeProductRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/account", accountRouter);

module.exports = app;
