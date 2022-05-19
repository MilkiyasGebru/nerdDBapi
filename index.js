const express = require('express')
const mysql = require("mysql2")
const cors = require("cors")

const setting = {
    "host": "localhost" , 
    "user": "root" ,
    "password": "milkiyas" ,
    "database": "nerd"
}

const connection = mysql.createConnection(setting);
connection.connect((err) => {
    if (err) return console.log(err.message);
    console.log("Database is connected ...");
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(6969 , ()=>console.log("server running on port 6969"));


app.get('/product', (req, res) => {
    let sql = "SELECT * FROM products";
    connection.query(sql, (err, result) => {
        if (err) return console.log(err.message);
        res.send(result) 
    })
})


