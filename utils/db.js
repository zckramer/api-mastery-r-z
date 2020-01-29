const mongoose = require("mongoose");

const Recipe = require("../models/recipe-domain");
const RecipeController = require("../controllers/recipe-controller")

mongoose.connect(
  // Richard's DB
  "mongodb+srv://username:assword@cluster007-rekop.mongodb.net/cocktails-db?retryWrites=true&w=majority",

  // Zack's DB
// "mongodb+srv://admin:passwordpassword@calico-host-khzco.mongodb.net/goddamnit?retryWrites=true&w=majority",  
{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connected to the motherfuckin DB!");
});

// Generate Margarita



// modelThree((error, savedModelThree) => {
//   if (error) return console.error(error);
//   console.log(savedModelThree.name, savedModelThree.image);
// });
// modelThree.save((error, savedModelThree) => {
//   if (error) return console.error(error);
//   console.log(savedModelThree.name, savedModelThree.image);
// });


