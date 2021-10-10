const fs = require("fs").promises;
const path = require("path");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { map } = require("ramda");

const {
  get: getTemplates,
  notIsNilOrEmpty,
} = require("../../../src/api/routes/templates");

chai.should();
chai.use(chaiAsPromised);
const { expect } = chai;

const templateFolderPath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "templates"
);

describe("'Get templates' handler", () => {
  it("returns list of templates", async () => {
    (await fs.lstat(templateFolderPath)).isDirectory().should.be.true;
    const templates = map(
      (name) => ({ name }),
      await fs.readdir(templateFolderPath)
    );
    expect(await getTemplates(templateFolderPath)).to.be.deep.equal(templates);
  });

  it("throws if folder path is empty", async () => {
    expect(() => getTemplates("")).to.throw("Folder path is not specified");
  });
});
