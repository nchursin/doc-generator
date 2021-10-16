const templates = require("./routes/templates");
const generate = require("./routes/generate");

const router = (app, config) => {
  app.get("/templates", handle(config, templates.get));
  app.put("/generate/:templateName", handle(config, generate.put));
  app.post("/generate/", handle(config, generate.post));
};

const respond = (data, req, res, next) => {
  res.send(data);
  next();
};

const handle = (config, handler) => async (req, res, next) => {
  try {
    respond(await handler(config, req), req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = router;
