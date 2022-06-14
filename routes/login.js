
 var express = require('express');
 var router = express.Router();
 
 var mysql = require('mysql');
 const { getloginPost } = require('../controller/controller');
 const func = require('../model/login');

 var con = mysql.createConnection({
    host: "easylearning.guru",
    user: "kcc_student",
    password: "Kccitm.edu.in",
    database: "akccStudent"
 });


 router.get('/', function (req, res, next){
    console.log("abc");
    con.connect(function(err){
        console.log("def");
        if (err) console.log("err");
        console.log("connected");
    })
    console.log("ABC")
    console.log("DEF")
    res.render('login')
 });
 
 router.get('/getLogin', function (req, res, next) {
   console.log(req.query)
   con.connect()
   con.query("select * from form", function (err, result) {
     if (err) throw err;
     console.log(result);
     res.render('login', { "data": result })
   });
   
 });
 
 router.post('/updateLogin', function (req, res, next) {
   console.log(req.body)
   res.json({ "Name": "Hello" })
 });
 router.post('/getLogin', function(req, res, next){
    getloginPost(req, res, next)
 });

 router.all('/getPost', function(req, res, next){
    console.log(req.body)
    if(req.body){
        //do something
    }
    else{
        //do something else
    }

 console.log(req.body.pass)
 res.json({"Name": req.body})
});

module.exports = router;