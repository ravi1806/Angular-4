import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('New Recipe',
      'This is a test recipe desc',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('Beans', 2), new Ingredient('Tomato', 5)]),
    new Recipe('Old Recipe',
      'This is an old recipe desc',
      'http://media3.sailusfood.com/wp-content/uploads/2016/02/mushroom-manchurian-recipe.jpg',
      [new Ingredient('Apples', 3), new Ingredient('Potato', 7)])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToSlist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
