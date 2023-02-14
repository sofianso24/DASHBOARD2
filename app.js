const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');
const { urlencoded } = require("body-parser");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'santevie',
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql connected...');
})

const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.listen('3000',() =>{
    console.log('server started on port 3000');
});
app.use(express.static("public"));

app.get('/dashboard', (req , res)=>{
 
    let sql = "select * from patients";

    db.query(sql, function (error, results, fields) {
        if (error) throw error;
       
        const a = "ran"
        console.log(results)
        res.render('dashboard', {name:  results[0].nom , name2 : a});
        

      });
    
   
});

// partients 

app.get("/table", (req, res) => {
db.query(`select * from patients`, (err, result) => {
        if (err) throw err;
        const data = result
        console.log(data)
        res.render("table.ejs", {data})

    })
})

// create patient

app.post("/patient/create", (req, res) => {
    console.log(req.body)
    const nom = req.body.lname
    const prenom = req.body.fname

    const sql = `
        insert into patients (nom, prenom)
        values (?, ?)
    `
    db.query(sql, [nom, prenom], (err, result) => {
        if (err) throw err;

        res.redirect("/table")
    })
})