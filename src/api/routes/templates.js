const fs = require("fs").promises;
const {
  map,
  ifElse,
  isEmpty,
  not,
  compose,
  composeWith,
  converge,
  or,
  isNil,
  andThen,
} = require("ramda");

const throwsError = (message) => () => {
  throw new Error(message);
};
const notIsNilOrEmpty = compose(not, converge(or, [isNil, isEmpty]));
const readFiles = (path) => fs.readdir(path);
const wrapFiles = map((name) => ({ name }));

const readTemplatesFromFolder = ifElse(
  notIsNilOrEmpty,
  readFiles,
  throwsError("Folder path is not specified")
);

const getTemplates = composeWith(andThen, [wrapFiles, readTemplatesFromFolder]);

module.exports = {
  get: getTemplates,
  notIsNilOrEmpty,
};
