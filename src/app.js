// server create karna
// server ko config karna

const express = require("express");

const app = express();

const notes =[]
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from express server");
});

app.post("/notes", (req, res)=>{
    console.log(req.body)
    res.send("note received")
    notes.push(req.body)
    console.log(notes)
})

app.get("/notes", (req, res)=>{
    res.send(notes)
})
//: nehi pata ":"
//DELETE .notes/2
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index]

    res.send("note deleted successfully")
   
})

//patch / notes : index
// req.body = {description: }
app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description = req.body.description;
notes[req.params.index].title = req.body.title;
    res.send("note updated successfully")
})
module.exports = app;
