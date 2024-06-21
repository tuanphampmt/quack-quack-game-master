const express = require("express");
const app = express();
const loadToken = require("./modules/loadToken");
const ACCESS_TOKEN = loadToken();
const collectGoldenDuck = require("./scripts/collectGoldenDuck");

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
  collectGoldenDuck(ACCESS_TOKEN);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
