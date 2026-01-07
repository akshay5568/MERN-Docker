const express = require("express");


const app = express();


app.get("/", (req,res) => {
     try {
         console.log("hello aditya")
        res.send("Hello");
     } catch (error) {
        console.log(error);
     }
})

app.get('/aditya', (req,res) => {
    res.send("Hello,Aditya")
})

app.listen(8080,() => {
    console.log("Server has started at 8080");   
})
