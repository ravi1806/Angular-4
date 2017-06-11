import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEvent  = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('New Recipe',
      'This is a test recipe desc',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Old Recipe',
      'This is an old recipe desc',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];
  recipeDetail(recipeEl: Recipe) {
    this.recipeEvent.emit(recipeEl);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
