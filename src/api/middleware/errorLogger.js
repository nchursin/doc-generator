const { logger } = require("../../log");

function errorLogger(error, req, res, next) {
  logger.error(error.message);
  logger.verbose(error.stack);
  next(error);
}

module.exports = errorLogger;
