var express = require('express');
var router = express.Router();
var BookModule = require('../model/user.model');


//database connection
var url = "mongodb+srv://sourinsaha2001:4pGLHdvfCBDhuIuw@cluster0.gate6ou.mongodb.net/anubhuti";
const mongo = require("mongoose");
mongo.connect(url);


//body-perser declearation 
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


/* GET admin  page. */
router.get('/', function(req, res, next) {
  
  res.render('dataentry');
});

router.post('/',function (req,res,next) {
  var bookData =[{ 
        "ISBN-13": req.body.id,
        "name": req.body.name,
        "img": req.body.img,
        "author" :req.body.author,
        "price":req.body.price ,
        "Language":req.body.Language ,
        "Perfect Paperback":req.body.paperback ,
        "ISBN-10":req.body.isbn_10 ,
        "Reading age":req.body.age ,
        "Country of Origin":req.body.country ,
        "Net Quantity":req.body.net_q ,
        "genre":req.body.genre
        

      }]
  // var dataTest=[{
    
  //   "ISBN-13": 9788195470730,
  //   "name": "BASUNDHARA TOMAY",
  //   "img": "https://m.media-amazon.com/images/I/41JqUlV4JzL._SX351_BO1,204,203,200_.jpg",
  //   "author" : " BOHEMIAN ",
  //   "price": "150.00",
  //   "Language": "Bengali",
  //   "Perfect Paperback": "64 pages",
  //   "ISBN-10": 8195470734,
  //   "Reading age": "14 years and up",
  //   "Country of Origin": "India",
  //   "Net Quantity": "1.00 Piece",
  //   "genre": "love"
  // }]
      const main =async () =>{
            try {
                 var data = await BookModule.insertMany(bookData);
                 console.log(data);
                 res.redirect("/admin");
            } catch (error) {
                console.log(error);
            }finally{
                // mongo.connection.close();
            }
        }

        main()
  
});
  
module.exports = router;
