const request = require("supertest");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeUserData = require("../models/fake-data/fakeUserData");

describe("GET /fake/user", () => {
  it("should return all fake user", async () => {
    const res = await request(app).get("/fake/user");
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body.message).toBe(ReasonPhrases.OK);
    expect(JSON.stringify(res.body.data)).toBe(JSON.stringify(fakeUserData));
  });
});
