const express = require("express");
const app = express();
var path = require("path");

app.use(express.static("src"));

app.get("/home", (req, res) => {
  res.redirect("/issues.html");
});

app.get("/page2", (req, res) => {
  res.redirect("/page2.html");
});

app.listen(3000);
