const { logger } = require("../../log");

function errorLogger(error, req, res, next) {
  // for logging errors
  logger.error(error);
  logger.verbose(error.stack);
  //console.error(error); // or using any fancy logging library
  next(error); // forward to next middleware
}

module.exports = errorLogger;
