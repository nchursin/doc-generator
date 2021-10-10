const path = require("path");
const express = require("express");
const request = require("supertest");
const { expect } = require("chai");
const router = require("../../src/api/router");
const { get: getTemplates } = require("../../src/api/routes/templates");

const { todo } = test;

describe("Routes", () => {
  const templatesPath = path.resolve(__dirname, "..", "data", "templates");
  const app = express();
  app.use(express.json());
  router(app, {
    templatesPath,
  });

  describe("/templates", () => {
    it("should return the list of templates", async () => {
      const response = await request(app).get("/templates").expect(200);
      expect(response.body).to.be.deep.equal(await getTemplates(templatesPath));
    });
  });
});
