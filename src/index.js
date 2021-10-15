const express = require("express");
const parseMp = require("express-parse-multipart");
const router = require("./api/router");
const middleware = require("./api/middleware");
const config = require("./config");
const app = express();

app.use(express.json());
app.use(parseMp);

middleware.pre(app);
router(app, config);
middleware.post(app);

console.log("Starting server on port 3000");
app.listen(3000);
