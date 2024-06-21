const express = require("express");
const app = express();
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MTA1MywidGltZXN0YW1wIjoxNzE4OTY5MjMyMDI1LCJ0eXBlIjoxLCJpYXQiOjE3MTg5NjkyMzIsImV4cCI6MTcxOTU3NDAzMn0.8M3AcQYGxl1bHeePqrEnDRcoT1MCVB2eQSKWKfiPRPo";
const collectGoldenDuck = require("./scripts/collectGoldenDuck");

app.listen(3000, () => {
  console.log("Server ready on port 3000.");
  collectGoldenDuck(ACCESS_TOKEN);
});

module.exports = app;
