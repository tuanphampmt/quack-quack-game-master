const express = require("express");
const app = express();
const loadToken = require("./modules/loadToken");
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MTA1MywidGltZXN0YW1wIjoxNzE4OTY5MjMyMDI1LCJ0eXBlIjoxLCJpYXQiOjE3MTg5NjkyMzIsImV4cCI6MTcxOTU3NDAzMn0.8M3AcQYGxl1bHeePqrEnDRcoT1MCVB2eQSKWKfiPRPo";
const collectGoldenDuck = require("./scripts/collectGoldenDuck");

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
  collectGoldenDuck(ACCESS_TOKEN);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
