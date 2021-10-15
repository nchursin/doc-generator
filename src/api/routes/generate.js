const { curry, toString, reduceBy, prop } = require("ramda");
const { readTemplate } = require("../../generation/findTemplate");
const { generateDocument } = require("../../generation/generateDocument");

const generate = curry(async (config, req) => {
  const generateDoc = generateDocument(req.body);
  const templateName = req.params.templateName;
  console.log(
    "await readTemplate(config.templatesPath, templateName) >> ",
    await readTemplate(config.templatesPath, templateName)
  );
  return generateDoc(await readTemplate(config.templatesPath, templateName));
});

const generateFromRequest = curry(async (config, req) => {
  const formDataByName = reduceBy(
    (acc, element) => element,
    {},
    prop("name"),
    req.formData
  );
  const generateDoc = generateDocument(
    JSON.parse(toString(formDataByName.values.data))
  );
  return generateDoc(formDataByName.template.data);
});

module.exports = {
  put: generate,
  post: generateFromRequest,
};
