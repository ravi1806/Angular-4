// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//
//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }

import {Ingredient} from '../shared/ingredients.model';
export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}
