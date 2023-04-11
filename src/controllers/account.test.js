const request = require("supertest");
const { StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeAuthData = require("../models/fake-data/fakeAuthData");

describe("GET /account", () => {
  it("status should be 200 and should return all profile", async () => {
    const payload = {
      email: fakeAuthData[0].user_email,
      password: fakeAuthData[0].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .get("/account")
      .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(StatusCodes.OK);
    expect(JSON.stringify(res.body.user)).toBe(JSON.stringify(fakeAuthData));
  });

  it("status should be 401", async () => {
    const payload = {
      email: fakeAuthData[5].user_email,
      password: fakeAuthData[5].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .get("/account")
      .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(StatusCodes.UNAUTHORIZED);
  });
});

describe("GET /account/:id", () => {
  it("status should be 200 and should return desired profile", async () => {
    const payload = {
      email: fakeAuthData[0].user_email,
      password: fakeAuthData[0].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .get("/account/1")
      .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(StatusCodes.OK);
    expect(JSON.stringify(res.body.user)).toBe(JSON.stringify(fakeAuthData[0]));
  });

  it("status should be 401", async () => {
    const payload = {
      email: fakeAuthData[5].user_email,
      password: fakeAuthData[5].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .get("/account/1")
      .set({ authorization: `Bearer ${jwtToken}` });

    expect(res.status).toBe(StatusCodes.UNAUTHORIZED);
  });
});

describe("PATCH /account/:id", () => {
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

  it("status should be 401", async () => {
    const payload = {
      email: fakeAuthData[5].user_email,
      password: fakeAuthData[5].password,
    };

    const resOfRequestJWT = await request(app)
      .post("/auth/login")
      .send(payload);
    const jwtToken = resOfRequestJWT.body.jwt;

    const res = await request(app)
      .patch("/account/1")
      .set({ authorization: `Bearer ${jwtToken}` })
      .send({ user_name: `${fakeAuthData[0].user_name}_edited` });

    expect(res.status).toBe(StatusCodes.UNAUTHORIZED);
  });
});
