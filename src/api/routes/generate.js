const { curry } = require("ramda");
const { readTemplate } = require("../../generation/findTemplate");
const { generateDocument } = require("../../generation/generateDocument");

const generate = curry(async (config, req, res) => {
  const generateDoc = generateDocument(req.body);
  const templateName = req.params.templateName;
  res.send(generateDoc(await readTemplate(config.templatesPath, templateName)));
});

module.exports = {
  post: generate,
};
