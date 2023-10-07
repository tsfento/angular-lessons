import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test for a recipe.', 'https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies-800x1200.jpg'), new Recipe('2', '2', 'https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies-800x1200.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}