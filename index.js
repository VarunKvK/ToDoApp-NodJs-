//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const daymodule=require(__dirname+"/date.js")

const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

const work=[]
const todoItems=[];

app.get("/", (req, res) => {
 const current= daymodule.getDay()
  res.render("list", { todayDay: current, todolists:todoItems});
});

app.get("/work",(req,res)=>{
  res.render("list",{todayDay:"Work List",todolists:work})
})

app.get("/about",(req,res)=>{
  res.render("about")
})
app.post("/",(req,res)=>{
  const todoItem=req.body.todo;
  if(req.body.button==="Work"){
    work.push(todoItem);
    res.redirect("/work")
  }else{
    todoItems.push(todoItem)
    console.log(todoItem)
    console.log(req.body)
    res.redirect("/")
  }
  })

app.post("/work",(req,res)=>{
  const workItem=req.body.todo
  work.push(workItem)
  res.redirect("/work")
})
app.listen(port, () => {
  console.log("Server is running on port : " + port);
});
