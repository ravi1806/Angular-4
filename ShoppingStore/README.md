# ShoppingStore

* `ng new ShoppingStore` will gives us the boilerplate
* `npm install bootstrap@4.0.0-alpha.6` will install the latest bootstrap.
* Inform CLI that bootstrap must be contained in the final bundle it creates for us. Go to .angularCLI.json file and add bootstrap in the styles array. While adding the file path remember that the path is in respect to the index.html file in the app folder so we need to go back a folder and give its path as `"../node_modules/bootstrap/dist/css/bootstrap.min.css"`
* Edit app.component.html and see if the bootstrap is working.


### Build the header component manually for practice

* Create a folder header in the app folder.
* Create a file header.component.ts and header.component.html
* Inside header.component.ts, write the following code: 
  ```js
    import {Component} from '@angular/core';
    @Component({selector: 'app-header', templateUrl: './header.component.html'}) export class HeaderComponent{};
  ```
* Edit the app.component.html file with some content.
* Go to app.module.ts and add this file path using `import {HeaderComponent} from './header/header.component.ts'` and adding `HeaderComponent` inside @NgModules declaration.
* Add the selector <app-header></app-header> inside app.component.html

### Build other components using Angular CLI

* `ng g c recipes --spec false` // spec false removes the testing file
* `ng g c recipes/recipe-list --spec false`
* `ng g c recipes/recipe-detail --spec false`
* `ng g c recipes/recipe-list/recipe-item --spec false`
* `ng g c shopping-list --spec false`
* `ng g c shopping-list/shopping-edit --spec false`

### Using the components.

* In the app.components.html, use <app-recipes></app-recipes> and <app-shopping-list></app-shopping-list>
* In the recipes.component.html, use use two cols of 5 and 7 for <app-recipe-list> and <app-recipe-detail>
* In the recipe-list.component.html file call <app-recipe-item> cos we want the items there instead of a list
* Go to the shopping-list.html and create xs-10 col and call <app-shopping-edit> in it.

### Add a navigation bar header

* header.component.html file, use the following code

