const request = require("supertest");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeTodoData = require("../models/fake-data/fakeTodoData");

describe("GET /fake/todo", () => {
  it("should return all fake todo data", async () => {
    const res = await request(app).get("/fake/todo");
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body.message).toBe(ReasonPhrases.OK);
    expect(JSON.stringify(res.body.data)).toBe(JSON.stringify(fakeTodoData));
  });
});
