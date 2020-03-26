class RecipeDomain {
    constructor(name, image, description, ingredients, instructions) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.ingredients = [ingredients];
        this.instructions = instructions;
    }
}
module.exports = RecipeDomain;