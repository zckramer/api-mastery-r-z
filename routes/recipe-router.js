var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/recipe-controller")

/* GET all recipes */
router.get('/recipes', recipeController.getAllRecipes);

router.get('/:id', recipeController.getRecipe);

router.patch('/recipes/:id', recipeController.updateRecipe);

router.post('/recipes', recipeController.addNewRecipe);

router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;
