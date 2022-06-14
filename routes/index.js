var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});


router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected!");
      });
    res.render('index')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `arpita` (`fname`, `lname`) \
    VALUES ('"+req.body.fname+"', '"+req.body.lname+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
    
res.json({"Name":req.body})
});


module.exports = router;
