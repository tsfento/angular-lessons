import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Meatloaf', 'A tasty meatloaf.', 'https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies-800x1200.jpg', [new Ingredient('Beef', 1), new Ingredient('Ketchup', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}