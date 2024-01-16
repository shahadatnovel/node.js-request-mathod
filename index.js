const express= require("express");
const app = express();
const PORT = 5000;
app.listex (PORT,()=>{
    console.log("server is running");
});
app.get("/",(req,res)=>{

    res.send("iam a get requite");
});
app.post("/",(req,res)=>{
 res.send("ima a post requist");
});
app.put("/",(req,res)=>{
 res.send("iam a put requist");
});
app.delate("/",(req,res)=>{
    res.send("iam a delate requist");
});