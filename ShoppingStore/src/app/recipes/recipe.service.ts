import { Recipe } from './recipe.model';
import {EventEmitter} from '@angular/core';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('New Recipe',
      'This is a test recipe desc',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Old Recipe',
      'This is an old recipe desc',
      'http://media3.sailusfood.com/wp-content/uploads/2016/02/mushroom-manchurian-recipe.jpg')
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
