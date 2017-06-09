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

* header.component.html file, use the code in header.component.html

### Add a model for recipe

* Go to recipe-list.component.ts and add an empty array `recipe = [];`
* Then create a model for recipe. Create a file recipe.model.ts in the recipe folder.
* export class Recipe from that file. It will set how all recipe should look like.
* Class can be instantiated so we can create new objects based on that class.
* public is used so that it can be used from outside of the class.
* A constructor is a function which will run once the object is created.

### Add content to the Recipes components

* Go to recipe-list.component.ts and  define type for recipes as Recipe[] from the model we just created. Also import the Recipe from the model file recipe.model.ts
* Then add some content to the array, fill one dummy recipe
* A new recipe is made by creatin a new object using the class. new Recipe(name,desc,url), the constructor wil return us the object.
* To see this, we must change the template of the recipe-list i.e recipe-list.component.html

### Easier way to make models. Here are two codes which do the same:->

* Usual code: 
```js
 export class Recipe {
   public name: string;
   public description: string;
   public imagePath: string;

   constructor(name: string, desc: string, imagePath: string) {
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
   }
 }
```
* Code that we should use: 
```js
export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string){}
}

```

### Data communication between components

* For example,  we have two comp. cockpit and server-element. In server-element.ts we have a property element: {name: string, content: string}; Notice this is all just type declaration in Ts(its on the left side of assignment). This property we will use in server-element.html. One directory up, in app, in  file app.component.ts we have a property serverElements = [{name: 'server1', content: 'cool test' }]; . To access element property of server-element.ts into app.component.html we need to use inside the `<app-server-element></app-server-element>` tags as [element] = serverElement. Notice here, serverElement is just one element of serverElements which is an array, its just an ngFor variable. So this way we can store the serverElement in element property of server-element.ts one by one using ngFor. Also, we need to use decorator @Input() in front of element in server-element in which inside parenthesis we can give it an alias. Input needs to be imported from the @angular/core.

*Binding to Custom Events*

In app.component.ts we have the array serverElements which keeps all the added, pre existing servers. We have two methods inside the component which get triggered on button clicks. These two methods add(push) the new object into the array serverElements. In the app.component.html file, we have `<app-cockpit></app-cockpit>` inside which we need to bind our event like `<app-cockpit (ourCustomEvent) = "methodOnCustomEvent($event)" ></app-cockpit>` . So, in the cockpit.component.ts we have to make a new property ourCustomEvent. To make it an event, assign it ` ourCustomEvent = new EventEmitter<{serverName: string, serverContent: string}>();` wherein we have defined what type of data the event will emit. EventEmitter needs to be imported from @angular/core. In the method, call this event using .emit(this.serverName, this.serverContent) method. Use @Output decorator. 

To apply CSS from app.component.css we need to write encapsulation: ViewEncapsulation.None in @Component({ })



