const logger = require("./pre/logger");
const verboseLogger = require("./pre/verboseLogger");

const httpErrorHandler = require("./post/httpErrorHandler");
const failSafeHandler = require("./fileSafeHandler");
const errorLogger = require("./errorLogger");

const preHandlerMiddleware = (app) => {
  app.use(logger);
  app.use(verboseLogger);
};

const postHandlerMiddleware = (app) => {
  app.use(errorLogger);
  app.use(httpErrorHandler);
  app.use(failSafeHandler);
};

module.exports = {
  pre: preHandlerMiddleware,
  post: postHandlerMiddleware,
};
