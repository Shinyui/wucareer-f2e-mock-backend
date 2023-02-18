const express = require("express");
const { httpGetFakeTodoData } = require("../controllers/fakeTodo");

const fakeTodoRouter = express.Router();

fakeTodoRouter.get("/todo", httpGetFakeTodoData);

module.exports = fakeTodoRouter;
