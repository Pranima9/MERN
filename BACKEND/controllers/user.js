//req and res handling

export const getUser = (req, res) => { //'export' is for to use this function in another file
        res.send("From HTTP GET Request.");  //copied from index.js
};


export const postUser = (req,res)=>{ //POST REQUEST
    const { username, password} = req.body
    // console.log(req.body); //tooo long so not preferred
    
    res.send({username, password, message:"User posted"}) // can be added extra eg. message
};