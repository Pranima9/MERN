//req and res handling

export const getUser = (req, res) => { //'export' is for to use this function in another file
        res.send("From HTTP GET Request.");  //copied from index.js
};


export const postUser = (req,res)=>{ //POST REQUEST //API banaune function
    const { username, phone, email, password, role = null} = req.body
    // console.log(req.body); //tooo long so not preferred

    try{
        const q = `Insert into user (username, phone, email, password, role) 
           value(?,?,?,?,?)` //values chy corresponding hunuparxa, ? bcz sql injection chances 

    
        db.query(q, [username, phone, email, password, role], //mathy ko q varible ma rakheko so that messy nadekhiyos
            (error, result) => {
                if (error){
                    return res.send ({message: "Error while executing query", error});
                } return res.send ({message: "User inserted successfully", result });
            });
    } catch (err) {
     console.log(err);
    }
    
    // res.send({username, password, message:"User posted"}); // can be added extra eg. message
};