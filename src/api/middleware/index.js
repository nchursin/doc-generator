const failSafeHandler = require("./fileSafeHandler");

const addCustomMiddleware = (app) => {
  app.use(failSafeHandler);
};

module.exports = addCustomMiddleware;
