import mysql from "mysql2"

const db = mysql.createConnection({
        host: "localhost", //kaha host vairaxa
        user: "root", //kun user xa
        password: "1234",
        database: "table1" //use garne db
    });

if (db.connect){
    console.log("Database connected successfully");
} else{
    console.log("error while connecting database");
}

export default db;
