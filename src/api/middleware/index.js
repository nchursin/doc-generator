const logger = require("./pre/logger");

const failSafeHandler = require("./fileSafeHandler");
const errorLogger = require("./errorLogger");

const preHandlerMiddleware = (app) => {
  app.use(logger);
};

const postHandlerMiddleware = (app) => {
  app.use(errorLogger);
  app.use(failSafeHandler);
};

module.exports = {
  pre: preHandlerMiddleware,
  post: postHandlerMiddleware,
};
