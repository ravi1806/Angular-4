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

* Usual Code 
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

**Binding to Custom Events**

In app.component.ts we have the array serverElements which keeps all the added, pre existing servers. We have two methods inside the component which get triggered on button clicks. These two methods add(push) the new object into the array serverElements. In the app.component.html file, we have `<app-cockpit></app-cockpit>` inside which we need to bind our event like `<app-cockpit (ourCustomEvent) = "methodOnCustomEvent($event)" ></app-cockpit>` . So, in the cockpit.component.ts we have to make a new property ourCustomEvent. To make it an event, assign it ` ourCustomEvent = new EventEmitter<{serverName: string, serverContent: string}>();` wherein we have defined what type of data the event will emit. EventEmitter needs to be imported from @angular/core. In the method, call this event using .emit(this.serverName, this.serverContent) method. Use @Output decorator. 

To apply CSS from app.component.css we need to write encapsulation: ViewEncapsulation.None in @Component({ })

** Getting Access to templates using ViewChild **
* In the ts file, import ViewChild from the @angular/core. Then use a decorator @ViewChild in front of a variable in which u want to catch the html DOM element ref. This ViewChild will take an arguement, it needs to be the reference on the html page using # or could also be a component(its first occurence will be taken). The example of a reference on the html page 
`@ViewChild('localreference') variablenName: ElementRef;`. We can then use it in the methods below as serverContent = this.variableName.nativElement.value. We should never change the value of the DOM using this ViewChild. 

**ng-content directive**

* If we have some html in server.component.html file and if we want to cut it to app.component.html containing the directive <app-server></app-server> and if we try and paste that html inside the tags of <app-server> it wont render anything. We must write <ng-content></ng-content> tags inside the server.component.html file where we cut the data to be pasted inside app.component.html file.

* @ContentChild is used just like @ViewChild. For eg. we have a local reference in the ng-content html content in app.componentn.html, then to use the reference inside server.component.ts we must use it in the server.component.ts.

### Component lifecycle


* ngOnChanges Called after a bound input property changes.
* ngOnInit Called once the component is initialised. Runs after the constructor.
* ngDoCheck Called during every change detection run.(not necessarily only when somethin changes, like if u click on a button and nothing happnes but still its an event so this function will run)
* ngAfterContentInit Called after content(ng-content) has been projected into the view. 
* ngAfterContentChecked Called everytime the projected content has been checked.
* ngAfterViewInit Called after the components view and childs view has been initialised
* ngAfterViewChecked Called everytime the views has been checked.
* ngOnDestroy Called once the component is about to be destroyed(eg. ngIf turns to false) 

* constructor runs before ngOnIt.
* The values from DOM can be taken out from ngViewInit and not ngOnIt cos the values can be taken out of DOM elements only after they are rendered.

The [reference](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) page


### To change pages without usin routing

* We change pages by clicks on anchor tags in headings, recipes n shopping list in the header.component.html file.
* We use the click event. Provide the click event methods in which we transfer the string `recipe` or `shopping-list`.
* We recieve this method in header.component.ts and here we need to create an event to transfer this string data.
* So we create a new customEvent with `new Emitter<string>();`. Also use @outpout and import it from @angular/core.
* Now inside the click method we emit this new Event with the string data that was recieved through the method.
* Now we listen on this event in the app.component.html file within `<app-header (customEvent)=someMethod($event)></app-header>`. Here the method wil get the data which the event CustomEvnet emitted. i.e. string(recipe or shopping-list).
* Now we create a property in the app.component.ts file which will hold some string eg. `page='recipe'`
* Then we define someMethod here which sets the variable page with the string that the event fired from the button.
* Now use this variable in the *ngIf clause to display or hide the content of the page and change the page.


### Displaying data on clicks.

* We bound an event on the recipe-item anchor tag in recipe-item.component.html. we then directed it to a method recipeClicked.
* In the recipe-item.component.ts file, we defined recipeClicked wherein we emitted an Event recipenoDetail transmitting nothing because we already have recipe data where we have just transferred it.
* In the recpe-comp.html file, we use this event and put a method recipeDetail to it which takes the existing recipeEl and sends it to the recp.comp.ts file, where we create a new event recipeEvent and we emit it inside the method recipeDetail sending the recipe details.
* We then create a property inside the recipe.component.ts file. Then in the recipe.component.html we assisn it selectedRecipe via the event recipeEvent.
* Also, we assign in the ng-if in app-recipe-details tags. Then bind it by using a property recipe in the component to selectedRecipe and changes the values in the html file of recipe-list-details.html

### Making the ADD button functional on shopping list

* Add a click event on Add button with addMethod defined in its ts file wherein we define another Event (secondEvent) and emit the ingrendeint through it. We first create the ingredient though. We recieve the secondEvent with the ingredient in the shoppinglist component wherein we take the $event which is actually (ingredient) into the ts file and then push it to the ingredients array.


### Custom Directive 

* The following example is just for demo purpose, dom shouldn't be used this way. As angular can render elements without the DOM and at that moment these elements may not be available. The better method is to use Renderer.

```js
  import {Directive,onInit,ElementRef} from @angular/core
  @Directive({
  selector: '[appBasicHighlight]'
  })
  export class BasicHighlightDirective implements onInit {
    constructor(private element: ElementRef) {
      this.element.nativeElement.style.backgroundColor = 'green';
    }
  }
 ```
Also, add in the @ngModules and its path in the app.module.ts file.

* Use it in the html file as ->
 
 ```js
 <p appBasicHighlight>Style me with the basic highlighter</p>
 ```
 ### Building a structural directive
 
 * Create a new directive using the cli -> `ng g d directiveName`. Below is the directive code: 
 
 ```js
 export class UnlessDirective {
  //we use setter using set keyword cos we want to monitor the changes on unless property, so whenver it changes this method runs
  //Make sure appUnless(the property name) is always same as the directive selector else it wont work.
  
  @Input set appUnless(condition: boolean) {
    if (!condition){
    //whenver the condition changes, create a view in the viewContainer pass as parameter what we want to render.
    this.vcRef.createEmbeddedView(this.templateRef);
    } else {
    this.vcRef.clear(); //else clear the vcRef
    }
  }
  
  //inject the template just like eleRef with ElementRef we did earlier. TemplateRef is of generic type(any).
  //The second parameter is the viewContainer that is where the template will be rendered
  
  constructor(private templateRef: TemplateRef<any>,private vcRef: ViewContainerRef){
    
  }
 }  
 
 ```
 
