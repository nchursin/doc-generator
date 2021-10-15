const { curry, toString, reduceBy, prop } = require("ramda");
const { readTemplate } = require("../../generation/findTemplate");
const { generateDocument } = require("../../generation/generateDocument");

const generate = curry(async (config, req, res) => {
  const generateDoc = generateDocument(req.body);
  const templateName = req.params.templateName;
  console.log(
    "await readTemplate(config.templatesPath, templateName) >> ",
    await readTemplate(config.templatesPath, templateName)
  );
  res.send(generateDoc(await readTemplate(config.templatesPath, templateName)));
});

const generateFromRequest = curry(async (config, req, res) => {
  const formDataByName = reduceBy(
    (acc, element) => element,
    {},
    prop("name"),
    req.formData
  );
  console.log(
    "req.formData >> ",
    JSON.parse(toString(formDataByName.values.data))
  );
  const generateDoc = generateDocument(
    JSON.parse(toString(formDataByName.values.data))
  );
  res.send(generateDoc(formDataByName.template.data));
});

module.exports = {
  put: generate,
  post: generateFromRequest,
};
