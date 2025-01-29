const Issue = require("../src/js/models/issue.js")
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
//define access to mongoose.Types.objectId and its methods
const ObjectID = mongoose.Types.ObjectId;

let id = 2;


router.get(["/home", "/", "/issues"], (req, res) => {
    Issue.find().then(issues => {
        res.render("issues", { issues });
    }).catch((err) => {
        res.status(500).send(err)
    });
  
});

router.get("/issueDetail/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    Issue.find({id: id}).then(issue => {
        res.render("issueDetail", {issue});
    }).catch((err) => {
        res.status(500).send(err)
    });
    
});

router.post("/createIssue", (req, res) => {
    let newIssue = new Issue ({
        id: id++,
        title: req.body.title,
        date: new Date().toLocaleDateString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }),
        status: "open",
        author: req.body.author,
        description: req.body.description
    });
    newIssue.save().then( Issue => {
        res.status(201).redirect("/issues");
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get("/form", (req, res) => {
    res.render("formIssue");
});

module.exports = router;