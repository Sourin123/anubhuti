var express = require('express');
var router = express.Router();
var BookModule = require("../model/user.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  var main = async ()=> {
try {
   var field = req.query.name;
   console.log(field);
   var recordData = await BookModule.find({"name" : field })
   console.log(recordData);
   if (recordData.length == 0) {
    console.log("there is en error")
    res.status(404).send("this book is not avalable right now ......... <br> stay tune")
   } else {
    console.log("success");
    res.render("books",{recordData})
   }
   
   
} catch (error) {
  console.log(error);
}
}
main()

});
  
module.exports = router;
