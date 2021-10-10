const templates = require("./routes/templates");
const config = require("../config");

const router = (app) => {
  app.get("/templates", handleRequest(templates.get));
};

const handleRequest = (handler) => async (req, res) =>
  res.send(await handler(config.templatesPath));
module.exports = router;
