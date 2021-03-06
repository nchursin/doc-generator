const fs = require("fs");
const path = require("path");
require("dotenv").config();

const env = process.env.NODE_ENV || "production";
console.log("Environment: ", env);
const config = {
  env,
  logLevel: "development" === env ? "silly" : "warn",
  port: process.env.PORT || 3000,
  templatesPath:
    process.env.TEMPLATE_PATH || path.resolve(__dirname, "..", "doc-templates"),
};

if (!config.templatesPath) {
  throw new Error("Templates folder is not configured");
}
if (!fs.lstatSync(config.templatesPath).isDirectory()) {
  throw new Error("Template folder is not a directory");
}

module.exports = config;
