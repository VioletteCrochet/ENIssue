
const express = require("express");
const config = require("./config");
const router = express.Router();

const app = express();

const issuesRoutes = require("./routes/issues.js");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static("src"));
app.use(express.urlencoded({ extended: false }));

app.use(["/issues", "/"], issuesRoutes);






// app.all(("/error", (req, res, next) => {
//   next(new Error())
// }))

// app.use((err,req, res, next) => {
//   console.log(err.stack);
//   res.status(500).render("error")
// })

app.listen(config.port, () => {
  console.log(`Server running at ${config.host}:${config.port}`);
});
