const express = require("express");
const route = express.Router();
route.get("/", (req, res, next) => {
  const healthReport = {
    uptime: process.uptime(),
    msg: "OK",
    time: Date(),
  };
  try {
    res.send(healthReport);
  } catch (error) {
    healthReport.msg = error;
    res.status(503).send(healthReport);
  }
});

module.exports = route;
