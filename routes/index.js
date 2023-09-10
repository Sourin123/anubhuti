var express = require('express');
var router = express.Router();
var url = "mongodb://127.0.0.1:27017/anubhuti";
const mongo = require("mongoose");
var BookModule = require("../model/user.model");
mongo.connect(url);

/* GET home page. */
router.get('/', function(req, res, next) {
 let data1 = []
    const data = async () =>{
        var books = await BookModule.find({});
        // console.log(books)
        res.render('index',{books});
    }
        
data();
    

});
  
module.exports = router;
