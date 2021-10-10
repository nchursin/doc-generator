const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");
const { ifElse, compose, identity } = require("ramda");

const templateNotFound = (templateName) => {
  throw new Error(`${templateName} not found`);
};
const findTemplate = compose(
  ifElse(fs.existsSync, identity, templateNotFound),
  path.join
);

const readTemplate = compose(fsp.readFile, findTemplate);

module.exports = {
  findTemplate,
  readTemplate,
};
