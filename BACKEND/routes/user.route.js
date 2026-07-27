import express from "express";
import {deleteUser, editUser, getSingleUser, getUser, postUser} from "../controllers/user.js"

const route = express.Router();

route.get("/get-data", getUser) //imported from controllers/user.js
route.post("/post-data", postUser) 
route.get("/user/:id", getSingleUser)
route.delete("user/:id", deleteUser)
route.patch("user/:id",editUser)

export default route;