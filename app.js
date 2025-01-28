const express = require("express");

const app = express();


app.use(express.static("src"));



app.get('/', (req, res) => {
    console.log("redirect page home to issues");
    res.redirect("pages/issues.html");
})

app.get('/issues', (req, res) => {
    console.log("redirect page issues");
    res.redirect("pages/issues.html");
})



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


app.listen(3000);

