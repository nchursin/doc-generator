const templates = require("./routes/templates");
const generate = require("./routes/generate");

const router = (app, config) => {
  app.get("/templates", handleRequest(config, templates.get));
  app.post("/generate/:templateName", generate.post(config));
};

const handleRequest = (config, handler) => async (req, res) =>
  res.send(await handler(config.templatesPath));
module.exports = router;
