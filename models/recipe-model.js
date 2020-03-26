const mongoose = require("mongoose");

const Recipe = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        type: String
    },

    description: {
        type: String
    },

    ingredients: {
        type: [String]
    },

    instructions: {
        type: String
    }

    
});
    module.exports = mongoose.model('Recipe', Recipe);