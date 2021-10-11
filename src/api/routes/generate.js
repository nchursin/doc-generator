const { curry } = require("ramda");
const { readTemplate } = require("../../generation/findTemplate");
const { generateDocument } = require("../../generation/generateDocument");

const generate = curry(async (config, req, res) => {
  console.log("req.params >> ", req.params);
  const templateName = req.params.templateName;
  const template = await readTemplate(config.templatesPath, templateName);
  console.log("req.body >> ", req.body);
  res.send(await generateDocument(template, req.body));
});

module.exports = {
  post: generate,
};
