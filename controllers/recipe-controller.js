const RecipeService = require("../services/recipe-service");

module.exports = {
  
  addNewRecipe(req, res) {

    const { name, image, description, ingredients, instructions } = req.body;

    RecipeService.add(name, image, description, ingredients, instructions, response => {
      console.log("RecipeService.Add: waiting for promise...")
      res.json({ response });
    })
  },

  deleteRecipe(req, res) {

    const recipeId = req.params.id;

    RecipeService.delete(recipeId, response => {
      res.json({ response })
    })
  },
  getRecipe(req, res) {
    
    const recipeId = req.params.id;

    RecipeService.findOne(recipeId, Recipe => {
      res.json({ Recipe });
    })
  },

  getAllRecipes(req, res) {
    RecipeService.findAll(Recipes => {
      res.json({ Recipes });
    });
  },

  updateRecipe(req, res) {
    const recipeId = req.params.id;
    const update = req.body;
    
    
    RecipeService.updateField(recipeId, update, response => {
      res.json({ response })
    });
  }


};