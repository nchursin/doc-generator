const { curry, toString, reduceBy, prop } = require("ramda");
const HttpError = require("../httpError");
const { readTemplate } = require("../../generation/findTemplate");
const { generateDocument } = require("../../generation/generateDocument");

const generate = curry(async (config, req) => {
  const generateDoc = generateDocument(req.body);
  const templateName = req.params.templateName;
  return generateDoc(await readTemplate(config.templatesPath, templateName));
});

const generateFromRequest = curry(async (config, req) => {
  const formDataByName = reduceBy(
    (acc, element) => element,
    {},
    prop("name"),
    req.formData
  );
  validateFormData(formDataByName);
  const generateDoc = generateDocument(
    JSON.parse(toString(formDataByName.values.data))
  );
  return generateDoc(formDataByName.template.data);
});

const validateFormData = (formData) => {
  if (!formData.template) {
    throw new HttpError(400, "template is missing from request");
  }
};

module.exports = {
  put: generate,
  post: generateFromRequest,
};
