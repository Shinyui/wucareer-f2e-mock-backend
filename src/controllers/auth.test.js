const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

describe("POST /auth/login", () => {
  it("status code should be 200", async () => {
    const payload = {
      email: fakeAuthData[0].user_email,
      password: fakeAuthData[0].password,
    };

    const res = await request(app).post("/auth/login").send(payload);

    expect(res.status).toBe(StatusCodes.OK);
  });

  it("status code should be 400", async () => {
    const payload = {
      email: "wrong@wucareer.com",
      password: "wrongpassword",
    };

    const res = await request(app).post("/auth/login").send(payload);

    expect(res.status).toBe(StatusCodes.BAD_REQUEST);
  });
});
