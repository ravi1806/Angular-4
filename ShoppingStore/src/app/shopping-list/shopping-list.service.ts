import {Ingredient} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 55),
    new Ingredient('Banana', 23)
  ];
    getIngredients() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      // for(let ingredient of ingredients){
      //   this.addIngredient(ingredient);
      // }
      // Use the spread operator here and add all ingredients in one go
      // push is not able to handle an array, it will push it as one element
      // but by using spread operator we can push items of an array as single elements.
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
