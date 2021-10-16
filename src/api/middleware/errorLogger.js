const { logger } = require("../../log");

function errorLogger(error, req, res, next) {
  logger.error(error);
  logger.verbose(error.stack);
  next(error);
}

module.exports = errorLogger;
