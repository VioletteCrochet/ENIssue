const express = require("express");
const app = express();
var path = require("path");

app.set("views", "./src");
app.set("view engine", "ejs");


app.use(express.static("src"));
app.use(express.urlencoded ({extended: false}))

const issues = [
  {
    title: "Comment optimiser un site web pour un affichage rapide en utilisant Flexbox et Tailwind CSS ?", 
    author: "Amélie Florent",
    description: "Je construis un site web avec Tailwind CSS et Flexbox. J'ai deux sections dans une div qui s'affichent côte à côte sur grand écran grâce à flex-row. Je veux qu'elles s'affichent l'une sous l'autre sur les petits écrans, mais qu'elles restent parfaitement alignées et centrées. J'ai essayé flex-col avec items-center, mais l'affichage n'est pas encore parfait. Des idées sur la meilleure configuration pour ce cas d'utilisation ?"
  },
  {
    title: "Comment structurer une section de blog avec des cartes dynamiques en Tailwind CSS ?",
    author: "Paul Perrot",
    description: "Je travaille sur une section de blog où chaque article est représenté par une carte (titre, image, description). Je souhaite afficher ces cartes dans une grille responsive avec Tailwind CSS, mais sans que l'affichage ne se casse sur des tailles d'écran intermédiaires. Existe-t-il des bonnes pratiques ou combinaisons de classes Tailwind pour un rendu propre et fluide sur tous les écrans ?"
  }
  ]


app.get(["/home", "/", "/issues"], (req, res) => {
  res.render("issues", { issues });
});

app.get("/formIssue", (req, res) => {
  res.render("formIssue");
});

app.post("/createIssue", (req, res) => {
  const { title, author, description} = req.body
  issues.push({title, author, description})
  res.redirect("issues")
})

app.listen(3000);
