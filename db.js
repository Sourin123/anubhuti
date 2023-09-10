// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict


// Define the database URL to connect to.
const mongoDB = "mongodb+srv://sourinsaha2001:4pGLHdvfCBDhuIuw@cluster0.gate6ou.mongodb.net/anubhuti";
let db = mongoose.connect(mongoDB,{
              useNewUrlParser : true,
              useUnifiedTopology : true
            }).catch((err)=>{
              if (err) {
                console.log(err)
                  }
                  else{
                    console.log(" connection successful ....")
                  }
            })

exports = db ;