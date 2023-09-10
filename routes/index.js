var express = require('express');
var router = express.Router();
var url = "mongodb://127.0.0.1:27017/anubhuti";
const mongo = require("mongoose");
var BookModule = require("../model/user.model");
// mongo.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
var conn = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    const main = async () =>{
        try {
           
            var featured_books = await BookModule.find({});
            var newly_arrived = await BookModule.find({}).sort([['date', -1]]);
            // console.log(" the book order is the following "+newly_arrived);
            var top_academic = await BookModule.find({});
        // console.log(books)
        res.render('index',{featured_books,newly_arrived,top_academic});
        } catch (error) {
            console.log(error);
        } finally{
            // mongo.connection.close();
        }
        
    }
        
main();
    

});
  
module.exports = router;
