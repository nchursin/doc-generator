const templates = require("./routes/templates");
const generate = require("./routes/generate");

const router = (app, config) => {
  //app.get("/templates", templates.get(config));
  //app.put("/generate/:templateName", generate.put(config));
  //app.post("/generate/", generate.post(config));
  app.get("/templates", handle(config, templates.get));
  app.put("/generate/:templateName", handle(config, generate.put));
  app.post("/generate/", handle(config, generate.post));
};

const handle = (config, handler) => async (req, res, next) => {
  try {
    res.send(await handler(config, req));
  } catch (error) {
    next(error);
  }
};

module.exports = router;
