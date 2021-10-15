const express = require("express");
const parseMp = require("express-parse-multipart");
const router = require("./api/router");
const middleware = require("./api/middleware");
const config = require("./config");
const app = express();

app.use(express.json());
app.use(parseMp);

router(app, config);
middleware(app);

console.log("Starting server on port 3000");
app.listen(3000);
