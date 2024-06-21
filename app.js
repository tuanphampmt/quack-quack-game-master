const express = require("express");
const app = express();
const loadToken = require("./modules/loadToken");
const ACCESS_TOKEN = loadToken();
const collectGoldenDuck = require("./scripts/collectGoldenDuck");

app.get("/start", (req, res) => {
  collectGoldenDuck(ACCESS_TOKEN);
  res.send("Express on Vercel");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
