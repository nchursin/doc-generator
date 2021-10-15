const expressWinston = require("express-winston");
const { config } = require("../../../log");

const logger = expressWinston.logger({ ...config, level: "info" });

module.exports = logger;
