const fs = require("fs").promises;
const path = require("path");
const { expect } = require("chai");
const {
  findTemplate,
  readTemplate,
} = require("../../src/generation/findTemplate");

const { todo } = test;

const templatesPath = path.resolve(__dirname, "..", "data", "templates");

describe("Template finder", () => {
  it("returns full path", () => {
    const filePath = findTemplate(templatesPath, "1.docx");
    expect(filePath).to.be.equal(path.join(templatesPath, "1.docx"));
  });

  it("throws if no template is found", () => {
    const templateName = "not existing template";
    expect(() => findTemplate(templatesPath, "not existing template")).to.throw(
      `${templateName} not found`
    );
  });

  it("reads template content", async () => {
    const templateName = "1.docx";
    const expected = await fs.readFile(
      findTemplate(templatesPath, templateName)
    );
    const actual = await readTemplate(templatesPath, templateName);
    expect(actual).to.be.deep.equal(expected);
  });
});
