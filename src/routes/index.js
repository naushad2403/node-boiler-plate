const express = require("express");
const route = express.Router();
route.use("/healthcheck", require("./healthcheck"));
module.exports = route;
