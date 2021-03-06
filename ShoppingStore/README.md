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
 ### ngSwitch
 ```js
 <div [ngSwitch]="value">
 <p *ngSwitchCase = "5">Value is 5</p>
 <p *ngSwitchCase = "10">Value is 10</p>
 <p *ngSwitchCase = "20">Value is 20</p>
 <p *ngSwitchDefault>Value is default</p>
 </div>
 ```

### Creating a dropdownDirective in the project.

* Create a directive file called dropdown.directive.ts and add it to ngModules components and the import. Then in the dropdown.directive file build a new directive. (directives can be build by cli too using `ng g d directivename`
* Then take a property which will toggle between true and false give it an initial value false, after that use @Hostlistener on click event and direct it to a method which will toggle the value of the property.
* Then make that toggleable property @HostBinding on class.show as we need to use the class show on those div elements to make them show all that dropdown data. 
* Add the directive in those divs in the html files. 

### Creating a service

* Create a file logging.service.ts and inside it write the following code
* ```js
    export class loggingService {
      //code here
    }
  ```
 * Import this in the ts file that you want to use.
 * To use service, we use Angular Dependency Injector. A dependency is something that a class of ours will depend upon. Dependency injectors simple injects an instance of this class of service into our component. All we need to do is to inform angular that we require such an instance. 
 * Call the service inside the constructor parameter of the component and define its type of service. Also, import that service from the file. Now angular knows what we want but it still doesn't know how to provide us that instance, so we use providers.Add a property to the @Component as providers and inside the array on the left side insert the servicename. 
 * Now we can use this service inside this component. This instance was created by angular and not manually, one of the reasons its better because angular knows how your project works. 
 * We can use this service across components.
 * To store and manage data we use services too. 
 * Most initialisation must in be done OnInit and not in the constructor.
 * Angular dependeny injector is a hierarchical injector. If we provide a service in some component, the anuglar knows how to create an instance and for all its child components. The highest possible level is app module. Where to include providers? 
    * AppModule : Same service is available app-wide.
    * AppComponent:  Same instance of service is avaialable for all components(but not for other services).
    * Any other component: Same instance of service is available for the component and all its child components. This will overwrite the service provided at an upper level causing some bugs in the code.

**Injecting** Services into services

* Add @Injectable() to the service in which u want to inject another service.


#### Creating a service in the shoppingStore app.

* Create files recipe.service.ts and shopping-list.service.ts files.
* Create services using export class.
* Cut the recipe data from recipe-list.components and paste it into the service.
* Make the recipe private and send it outside via a method, also send a copy outside as objects are referred by address and if changed outside it will be changed inside too. So use slice method to send a copy.
* Add providers in the recipe.component.ts file and add import too.
* Call this service in the recipe-list.components.ts file by calling the service inside a constructor as  private recipeService: RecipeService
* In the ngOnInit assign this services method which will give the copy of the recipe array to this null array defined in the current file.
* Remove the output and evenEmitters from the imports and code from the file of recipe-item.component.ts
* In the recipe.service.ts file, create an event recipeSelected which will emit the recipe data.
* Import the recipeService service in the recipe-item.component file.
* Emit the recipeSelected event inside the recipeSelected method inside this file and emit the recipe data of this RecipeItemComponent file.
* Go to recipe-list.component.html and remove the events and listeners.
* Delete recipeSelected method and our own EventEmitter from recipe-list.component.ts
* Setup the listener for the newly created event recipeSelected in the recipes.component.ts file in ngOnInit method.
* Inside the listener we will get recipe data if anything changes, assign this recipe data to the selectedRecipe.


* **Summary of Above steps**: In the recipe-item.component.html we have click event , so when recipeClicked method is fetched, we emit an event with the recipe data(which it gets from the recipe-list.component.html as property binding within <recipe-item> tags.) which is defined in the recipeservice. This event we subscribe(listen) to in the recipe.component.ts file and as soon as we get a change there we change the selectedRecipe to the recipe.

* Create a shoppinglist service and add the ingredients here, make it private and create a method to send a copy of the array outside.
* Add to the providers in app.module.ts because we intend to inject in the recipeServices later.
* We need to watch the changes on the ingredients array as we are passing a copy of it and not the original array itself. So we need to update the copy as soon as the real array is changed(ingredient added). To do that we add an event and listen to it for whenver the data is pushed in the ingredient array.

#### Passing ingredients from recipe to shopping list via service and spread operator

* Add a click event in recipe.component.html file and the method onAddList will be defined in its ts file. We need to get the recipe service here which will inturn access the shopping list service. Then add a method to the recipe.service file addIngredientsTosList wherein we receive the ingredients. Now go over to the onAddList and call this method addIngredientsTosList with recipe data of recipe-detail.component into it.

### Routing

* Congifgure the routing in the app.module.ts file.
* Define a `const appRoutes: Routes = [{path: 'pageName', component: 'ComponentName'}];` whose type should be Routes. Routes need to be imported from @angular/router. This appRoutes should hold an array of our different routes. Make sure not to add a / infront of the pagename. Create an empty path for homepage. 
* We now need to register this routes in our app. To do that, in the app.module.ts file, insdie the imports array add RouterModule and it should be imported from the @angular/router too along with Router. Call forRoot() method on RouterModule to register some routes for our main application. Send our appRoutes as a parameter in forRoot() in the imports array. To render your pages, use <router-outlet> directive instead of the selectors. The currently selected route will be rendered here.
* In the html pages, if we use href, it will refresh the page everytime which we dont want. So to get our routes working we actually need to use routerLink instead of href. eg. `<a routerLink="/">Home</a>`. Another way of using routerLink is by using property binding. `<a [routerLink] = " '/pageAsString ' ">Home</a>` or `<a [routerLink] = "['/pageAsString']">Home</a>`
* Now the pages wont reload because routerLink catches the click and prevents the default(sending a request) and analyses our path and checks if it finds a fitting route in our configuration.
* In the routerLink if we specify the pageName without a `/` that would still work as we are passing a relative path. But if we want to nest a path after it we can use relative path otherwise as long as you want to attach the path to the root domain we must use absolute path. Absolute path = `/users`. Relative path = `users` or `../users` This will append this to the already existing path in the url. So for nesting paths we can use relative paths. 
* To style the selected link with active class we **don't use** `class = 'active'`. Instead we **use** `routerLinkActive = "className"`. Also, use `[routerLinkActiveOptions] = "{exact: true}"` where we property bind because we pass in a dynamic object. exact is a predefined property of this routerLinkActive directive. 
* To navigate programmatically, we need to bind a click event and the method will be defined in the ts file. In the component, call the router in the constructor `private router: Router` and also import it. Then in our method use this router to naviage. eg. `this.router.navigate(['/pageName'])`
* We can use relative path programmitacally. This doesn't behave like we expect it to.(it doesn't append to the already existing url and starts afresh. eg. "servers" wont get added to already present servers in the url(servers/servers this wont happen) but will open a new route for it with only /servers. We can get this server/server functionality by adding another parameter in the navigate method which will be of type ActivatedRoute. We need to import it from @angular/route. Then in the constructor initialise it as `private route: ActivatedRoute` this will give us the current url. So in the method navigate we mention in the second paramter that the path is relative to what. `this.router.navigate(['pageName',{relativeTo: this.route}])`
* To dynamically add a parameter, in the routing configuration in app.module.ts file, add to `path:users/:id`
* To fetch the data from the parameters. We use snapshot method on ActivatedRoute and then use the params method on it to extract the data. eg. `this.user.id = this.route.snapshot.params['id'];` and `this.user.name=this.route.snapshot.params['name']` wherein we have route defined in the constructor as ActivatedRouter and routing configured as `path:/user/:id/:name`
* We load our data(user inside ngOnInit) by using the snapshot on route. if we load a new route, angular looks at app.module then finds the fitting route, loads the component, initialises the component and gives the data by accessing the snapshot method. That only happens if we havent been on this component before. But if we are already on the component, it wont re render the component. So this method wont change the data if the url is changed by a routerLink on the same page. eg.`<a [routerLink]="[{'/users',10,'Anna'}]"></a>` in the html file, this will change the url but not the user.name and user.id. because Angle wont re render the component. To change the data, we need to use an observable. We write the code for this observable outside our ngOnInit in the component. There we subscribe to the params observable which is available on the route. params on snapshot wasn't an observable. This one on route is an observable and it will fire whenver the route is changed(url is changed). eg. `this.route.params.subscribe((params: Params)=>{this.user.id=params['id']; this.user.name = params['name']);`where Params type is imported from @angular/routes
* Subscriptions remain in the memory once the component is destroyed. So its necessary to manually unsubscribe them. In this case, angular does it for us, but for other or custom observables, we need to manually unsubscribe. For that, we need to import Subscription from 'rjxs/Subscription'. Then define paramSubscription: Subscription; type. Then assign it the 
`this.route.params.subscribe((params: Params)=>{this.user.id=params['id']}`. implement on OnDestroy and then inside the component, call the hook ngOnDestroy() { this.paramSubscription.unsubscribe()}; i.e call the unsubscribe method.
* **Passing Query Parameters and Fragments**: We use a new property called `[queryParams]="{allowEdit: '1'}"` //This will parse as ?allowEdit=1 and `fragment="loading"` which will parse as #loading in the url. We need the url to look like /servers/1/edit wherein 1 is the id. We can do this by passing the id in the onLoadMethod and then using the navigate method on route. So, this.route.navigate(['/servers',id,'edit'],{queryParams: {allowEdit: '1'}, fragment: 'loading' });
* **Retreiving data from the queryparams**, we can use `this.route.snapshot.queryParams` and `this.route.snapshot.fragments` We can use this method or we could use the observables, `this.route.queryParams.subscribe()` and `this.route.fragment.subscribe()`, Angular removes these subscriptions on its own so we dont actually need to unsubscribe manually.
* The urls are all strings. Always rememeber to convert ids to number by adding + in front.
* **Setting up child nested routes**:  In the routing configuration after the path and components add another property children. It takes an array of the path and component of the components. In the path, the parents path is omitted, we only provide with what the childrens url part will be. Now add a `<route-outlet></route-outlet>` to the parent route html file.
* In the navigate method, In the second parameters, alongside relativeTo we can also pass queryParamsHandling: 'preserve' OR 'merge' to preserve the queryparameters or merge them when changing page. 
* In the route configuration, we can use wildcard along with redirectTo to route the unknown page requests. eg. `{path: '**', redirectTo: '/not-found'}`. Make sure this is at the end of all the routes else it would always route to this.

* To put all routing configurations in one file, we make a file app-routing.module.ts in which we create a module eg.
```js
import { 'NgModule' } from '@angular/core';
import { 'Routes','RouterModule' } from '@angular/router';

//Define your const appRoutes:Routes = []; here inside the array 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
 
}
```
Add to the imports array in app.module.ts file AppRoutingModule.

* **Routing Guards** Functionality, logic, code which are executed before the routers are loaded or once you want to leave a route. CanActivate is one such Guard. We make a service implement it and then use the method `canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { };` These arguements (ActivatedRouteSnapshot and RouterStateSnapshot) are provided by the Angular before the routes are loaded. CanActivate can return an observable or promise or just a boolean. So CanActivate can work asynchronously or synchronously. Add CanActivate in the routing configuration and fill its array for the code that is to be used. We can also implement CanActivateChild and define a different method canActivateChild and in the routing configuration we add this to the children.
To leave a route or not we can use canDeactivate. Create a service deactivateguard service and inside it export an interface(a contract which can be imported by some class which forces this class to provide some logic) below is what it looks like  
```js
import { Observable } from 'rjxs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/core';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate( component: CanComponentDeactivate,
                 currentRoute: ActivatedRouteSnapshot,
                 currentState: RouterStateSnapshot,
                 nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { return component.canDeactivate(); }
}
In the routing config file, add this property canDeactivate: [canDeactivateGuard] then provide it in the app.module.ts file
```

* Passing static data to a route:- Add a property `data: {message: "Page Not Found"}` to the routing configuration. Then fethc it inside the component.ts file through route: ActivatedRoute  in two ways, using observable and without using observable. Without using observable-> `this.route.snapshot.data['message']` , using observable `this.route.data.subscribe((data: Data)=>{this.errorMessage = data['Message']})`

* Resolving dynamic data:- Maka resolver serice
```js
  import {Resolve} from '@angular/router';
  interface Server {
    id: number,
    name: string,
    status: string
  }
  export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {
   resolve(route:ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
   
   }
  }
```

#### Routing in shopping store

* Create a file app-routing.ts and use the following code: 

```js
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
const appRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'} //pathMatch is reqd because an empty path is part of every route. So that it doesnt match to others we need to use pathMatch to full, so it will ONLY redirect when the FULL path is empty.
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], 
  exports: [RouterModule]
})
export class AppRoutingModule{}
//Add AppRoutingModule to imports array in app.module.ts
```
* Add the links-> Go to header.component.html file and remove the links and the methods for click and add routerLink = '/recipes' or [routerLink] = "['/recipes']";
* Add the active class by using routerLinkActive = 'className'

**Adding Child Routes**

* Add children array to recipe route config.
* Add a componet recipe-starter. Config it for the children.
* Add router-outlet in recipe.component.html
* Remove the unwanted services and methods from the html and ts files of recipe-detail and recipe-list.
* Add an ActivatedRoute in the constructor of the recipe-detail and then subscribe on it the method.
* Go to recipe-item.component.html and add [routerLink] with current index of the array(note we just need a numerical value). Then add a property @Input() index: number in the recipe-item.component.ts file and then get it from one level up from recipe-list.component.html file. Add it to the loop and fetch the index from there, set up [index] from there and use it in recipe-item.component.html file for our [routerLink].

`this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});` the first parameter is how many levels up u want to go, next parameter is the id parameter and the next is edit.. so it will show as recipes/1/edit. We go up one level because we want to add 1 before edit. the relativeto path is to the current route(ActivatedRoute) here.

* If we change the route from within the same component, the component wont destroy so it wont change any data that we took using snapshot method. We need to subscribe on it to change the data within the component.
eg.
`this.activatedRoute.snapshot.url` or `this.activatedRoute.snapshot.data` or `this.activatedRoute.snapshot.params` wont work in such cases we need to subscribe them `this.activatedRoute.params.subscribe`.
