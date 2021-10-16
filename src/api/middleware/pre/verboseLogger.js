const { logger } = require("../../../log");

const verboseLogger = (req, res, next) => {
  logger.verbose(`IS FORM DATA: ${Boolean(req.formData)}`);
  logger.verbose(`REQUEST BODY: ${JSON.stringify(req.body)}`);
  next();
};

module.exports = verboseLogger;
