//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

var todoItems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  var today = new Date();
  var options={
    weekday: "long",
    day: "numeric",
    month: "long",
  }
    var current=today.toLocaleDateString("en-US",options)
  res.render("list", { todayDay: current, todolists:todoItems});
});

app.post("/",(req,res)=>{
    var todoItem=req.body.todo;
    todoItems.push(todoItem)
    console.log(todoItem)
    res.redirect("/")
})

app.listen(port, () => {
  console.log("Server is running on port : " + port);
});
