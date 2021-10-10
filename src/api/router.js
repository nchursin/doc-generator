const templates = require("./routes/templates");

const router = (app, config) => {
  app.get("/templates", handleRequest(config, templates.get));
};

const handleRequest = (config, handler) => async (req, res) =>
  res.send(await handler(config.templatesPath));
module.exports = router;
