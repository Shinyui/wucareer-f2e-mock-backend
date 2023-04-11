const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

describe("GET /profile", () => {
  it("status should be 200 and profile should match desired user data", async () => {
    const payload = {
      email: fakeAuthData[0].user_email,
      password: fakeAuthData[0].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;
    const res = await request(app)
      .get("/profile")
      .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(StatusCodes.OK);
    expect(JSON.stringify(res.body.user)).toBe(JSON.stringify(fakeAuthData[0]));
  });

  it("status should be 401", async () => {
    const invalidJwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    const resWithInvalidJWT = await request(app)
      .get("/profile")
      .set({ authorization: `Bearer ${invalidJwt}` });

    expect(resWithInvalidJWT.status).toBe(StatusCodes.UNAUTHORIZED);
  });
});

describe("PATCH /profile", () => {
  it("status should be 200 and should update desired profile", async () => {
    const payload = {
      email: fakeAuthData[0].user_email,
      password: fakeAuthData[0].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .patch("/account/1")
      .set({ authorization: `Bearer ${jwtToken}` })
      .send({ user_name: `${fakeAuthData[0].user_name}_edited` });

    expect(JSON.stringify(fakeAuthData[0])).toBe(
      JSON.stringify({
        id: 1,
        user_name: "admin001_edited",
        user_email: "admin001@wucareer.com",
        password: "admin001",
        roles: ["admin", "user"],
      })
    );
  });
});
