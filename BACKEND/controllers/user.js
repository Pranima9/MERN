//req and res handling
import db from "../database/db";

export const getUser = (req, res) => { //'export' is for to use this function in another file
        res.send("From HTTP GET Request.");  //copied from index.js

        try{
        const q = `Insert into user (username, phone, email, password, role) 
           value(?,?,?,?,?)` //values chy corresponding hunuparxa, ? bcz sql injection chances 

    
        db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send.status(500) ({message: "Error while executing query", error});
                } return res.send.status(200) ({message: "User inserted successfully", result });
            });
    } catch (err) {
     console.log(err);
    }
};

export const getSingleUser = (req,res) => {
    const {id} = req.params;
    try{
        const q = `select * from user where id=?`


         db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send.status(500) ({message: "Error while executing query", error});
                } return res.send.status(200) ({message: "User inserted successfully", result });
            });
    } catch (err) {
     console.log(err);
    }
    }


export const postUser = (req,res)=>{ //POST REQUEST //API banaune function
    const { username, phone, email, password, role = null} = req.body
    // console.log(req.body); //tooo long so not preferred

    try{
        const q = `Insert into user (username, phone, email, password, role) 
           value(?,?,?,?,?)` //values chy corresponding hunuparxa, ? bcz sql injection chances 

    
        db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send.status(500) ({message: "Error while executing query", error});
                } return res.send.status(200) ({message: "User inserted successfully", result });
            });
    } catch (err) {
     console.log(err);
    }
    
    // res.send({username, password, message:"User posted"}); // can be added extra eg. message
};

export const deleteUser = (req,res) =>{
    try{
        const q =  `delete from user where id = ?`;
        
        db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send.status(500) ({message: "Error while executing query", error});
                } return res.send.status(200) ({message: "User deleted successfully", result });
            });


    } catch(err) {
        console.log(err);
    }
}

export const editUser = (req,res) =>{
    const { username, phone, email, password, role = null} = req.body

    try{
        const q = `update  user set username=?, phone=?, email=?, password=?, role=?, where id =?`; //values chy corresponding hunuparxa, ? bcz sql injection chances 
    
        db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send.status(500) ({message: "Error while executing query", error});
                } return res.send.status(200)({message: "User edited successfully", result });
            });
    } catch (err) {
     console.log(err);
    }    
};

 //THESE ARE ALL APIs WE MADE, 5 OF THEM IT MAKE US DO CRUD OPERARIONS