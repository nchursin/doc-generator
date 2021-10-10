const express = require("express");
const router = require("./api/router");
const config = require("./config");
const app = express();

app.use(express.json());

router(app, config);

console.log("Starting server on port 3000");
app.listen(3000);
