const { Double } = require("mongodb");
const mongo = require("mongoose");
var url = "mongodb+srv://sourinsaha2001:4pGLHdvfCBDhuIuw@cluster0.gate6ou.mongodb.net/anubhuti";
mongo.connect(url).then(console.log("connection successful" )).catch((err)=>{
    console.log(err);
});
const BookSchema = new mongo.Schema({
       
        "ISBN-13": {
            type : String
        },
        "name": {
            type : String,
            uppercase : true
        },
        "img": {
            type : String
        },
        "author": {
            type : String,
            uppercase : true
        },
        "price": {
            type : String
        },
        "Language": {
            type : String,
            uppercase : true
        },
        "Perfect Paperback":{
            type : String
        },
        "ISBN-10": {
            type : Number
        },
        
        "Reading age": {
            type : String
        },
        "Country of Origin": {
            type : String,
            uppercase : true
        },
        "Net Quantity": {
            type : String
        },
        "genre":{
            type : String
        },
        "date" : {
            type : Date,
            default : Date.now  
        }
      
});

const BookModule = mongo.model('BookModule',BookSchema);
// var dataTest=[{
    
//     "id": 1,
//     "name": "BASUNDHARA TOMAY",
//     "img": "https://m.media-amazon.com/images/I/41JqUlV4JzL._SX351_BO1,204,203,200_.jpg",
//     "author" : " BOHEMIAN ",
//     "price": "1:50.00",
//     "Publisher": "ANUVUTI PRAKASHAN (7 April 2022)",
//     "Language": "Bengali",
//     "Perfect Paperback": "64 pages",
//     "ISBN-10": 8195470734,
//     "ISBN-13": 978-8195470730,
//     "Reading age": "14 years and up",
//     "Country of Origin": "India",
//     "Net Quantity": "1.00 Piece",
//     "genre": "love"
//   }]

// const main =async () =>{
//     try {
//          await BookModule.insertMany(dataTest);
//     } catch (error) {
//         console.log(error);
//     }finally{
//         mongo.connection.close();
//     }
// }
// main();


module.exports = BookModule ; 