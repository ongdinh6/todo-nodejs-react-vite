import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "index";

describe("Express App", () => {
  it("responds to /api/hello", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello world!");
  });

  it("responds to /api/hello with name query parameter", async () => {
    const response = await request(app).get("/api/hello?name=John");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello John");
  });

  it("responds to non-existing routes when running locally", async () => {
    const response = await request(app).get("/non-existing-route");
    expect(response.status).toBe(404);
  });

  // Add more test cases for other routes and edge cases
});
