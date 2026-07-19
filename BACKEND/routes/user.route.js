import express from "express";
import {getUser, postUser} from "../controllers/user.js"

const route = express.Router

route.get("/get-data", getUser) //imported from controllers/user.js
route.post("/post-data", postUser) 

export default;