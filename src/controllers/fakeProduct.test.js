const request = require("supertest");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const app = require("../app");
const fakeProductData = require("../models/fake-data/fakeProductData");

describe("GET /fake/product", () => {
  it("should return all fake product data", async () => {
    const res = await request(app).get("/fake/product");
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body.message).toBe(ReasonPhrases.OK);
    expect(JSON.stringify(res.body.data)).toBe(JSON.stringify(fakeProductData));
  });
});
