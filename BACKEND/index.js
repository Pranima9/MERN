// const express = require("express"); //to import express from express package 

import express from "express";
import userRoute from "./routes/user.route.js"; //userRoute or Route j lekhda ni vayo

const app = express(); //app ko thauma j lekhda ni hunxa

app.use(express.json()); //changes to language which javascript understands

app.use("/api",userRoute) // path becomes http://loclahost:5555/api/get-data


// app.get("/get-data",(req, res)=>{ //pass 2 parameters [/get-data is endpoint] GET REQUEST
//     res.send("From HTTP GET Request."); 
// }) //we did this in user.js file


// app.post("/post-data", (req,res)=>{ //POST REQUEST
//     const { username, password} = req.body
//     // console.log(req.body); //tooo long so not preferred
    

//     res.send({username, password, message:"User posted"}) // can be added extra eg. message
// }) //we did this in user.js file

app.listen(5555, () =>{ // this is a method, kaha host/run garaune ho vanxa [port number jati ni lekhna milxa]
    console.log(`Server is running on http://localhost:5555`)
});
 