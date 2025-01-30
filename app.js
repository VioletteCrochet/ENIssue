const mongoose = require('mongoose');
const Issue = require('./src/model/Issue');
const express = require("express");

mongoose.connect("mongodb+srv://yoannbattu2024:FmusTcjh!@clusteryoanneni.8oqrw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterYoannENI")


const app = express();
app.set("views", "./src/views"); // put the folder path here
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));




let issues = [];
// let issues;
let currentId = 1;

app.get("/", (req, res) => {
    console.log("redirect page home to issues");
    res.render("issues", { issues });
});

app.post("/createIssue", (req, res) => {
    console.log("creating new issue with form body ", req.body);
    const message = new Issue({
        'id': currentId, 
        'title': req.body.title, 
        'author': req.body.author, 
        'date_created': new Date(), 
        'status': "Ouverte", 
        'description': req.body.description, 
    })
    issues.push({
        id: currentId, 
        title: req.body.title,
        author: req.body.author,
        date_created: new Date(),
        status: "Ouverte",
        description: req.body.description,
    });
    currentId += 1;
    message.save().then(res.status(201).redirect("/"));
    // res.redirect("/");
});

app.get("/updateIssue/:id", (req, res) => {
    
});

app.get("/deleteIssue/:id", (req, res) => {

})

app.get('/testError', (req, res, next) => {
    throw new Error("test error");
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render("error", {
        titre: "erreur interne",
        erreur: err,
    });
});

app.listen(3000);

// req.query pour dico de query params
// req.body

// app.get("/pages/page1", (req, res) => {
//     console.log("redirect page 1 with query params");
//     console.log(req.query);
//     res.redirect("issues.html");
// })

// app.get("/pages/page2/:id", (req, res) => {
//     console.log("redirect page 2 w/ path variable");
//     console.log(req.params.id);
//     res.redirect("issues.html");
// })

// app.get("/pages/pagePathVar/:id", (req, res) => {
//     const id = req.params.id;
//     console.log("id=", id);
//     res.redirect("pages/pagePathVar.html");
// })

// app.get('/issues', (req, res) => {
//     console.log("redirect page issues");
//     res.redirect("pages/issues.html");
// });
