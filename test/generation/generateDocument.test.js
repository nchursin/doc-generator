const { readTemplate } = require("../../src/generation/findTemplate");
const path = require("path");
const chai = require("chai");
const chaiExclude = require("chai-exclude");
const { generateDocument } = require("../../src/generation/generateDocument");
const PizZip = require("pizzip");
const Templater = require("docxtemplater");
const { expect } = chai;

chai.use(chaiExclude);

const templatesPath = path.resolve(__dirname, "..", "data", "templates");
const templateName = "1.docx";

describe("Document generator", () => {
  it("generated document", async () => {
    const params = {
      firstName: "John",
      lastName: "Doe",
      includeText: true,
    };
    const zip = new PizZip(await readTemplate(templatesPath, templateName));
    const doc = new Templater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });
    doc.render(params);
    const expected = doc.getZip().generate({ type: "nodebuffer" });
    const actual = await generateDocument(
      params,
      await readTemplate(templatesPath, templateName)
    );
    expect(actual).to.be.deep.equal(expected);
  });
});
