const PizZip = require("pizzip");
const Templater = require("docxtemplater");
const { curry, compose } = require("ramda");

const zip = (template) => new PizZip(template);
const doc = (zip) =>
  new Templater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });
const docRender = curry((params, doc) => {
  doc.render(params);
  return doc;
});
const generateFromTemplater = (doc) =>
  doc.getZip().generate({ type: "nodebuffer" });

const generateDocument = curry((params, template) => {
  const parametrizedDocRender = docRender(params);
  return compose(
    generateFromTemplater,
    parametrizedDocRender,
    doc,
    zip
  )(template);
});

module.exports = {
  generateDocument,
};
