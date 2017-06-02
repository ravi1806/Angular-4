Empty out the app.component.html page
Remove all variables from export class AppComponent  app.component.ts file.
npm install bootstrap@4.0.0-alpha.6
Go to angular-cli.json file and add boostrap css file in the styles. Note: Pathing is respect to the index.html file.
So basically as index.html is inside the environments folder we need to go one folder up. ../
Start the server ng serve
It will serve the index.html file in the environments folder and not the app.component.html as it may appear. 
Angular is a framework that serves our Single Page (index.html) here.
In index.html app-root is a component created by the Angular cli.

So How is Angular Triggered:->

The index.html file that is served, if we inspect the source code then we can seee a few scripts are injected into it, we will add our scripts to it too. We don't have to do this manually as cli does it for us. 

This scripts are injected by a main.ts file. This is where it all starts. It has a method PlatformBrowserDynamic().bootstrapModule(AppModule) where in AppModule is imported from apps/app.module.ts.
Don't confuse the bootstrap here with the fwk one.

So basically main.ts calls up the method using data from app.module.ts which exports AppModule to it which contains the various component files such as app.component.ts, app.component.html, app.component.css, app.component.spec.ts from where it gets the selector as app-root that is used by the index.html. Our app.component here is app-root.
We then add our components to this app.component.html and not the index.html(only app-root is bootstrapped with index.html)

To create a component 

@Component is a decorator which is a typescript feature that is used to enhance a class. But typescript doesn't know what a @Component is from the start so we need to import it. using import { Component } from '@angular/core'. So now typescript knows what a @Component is but we now need to define it. We do this by passing a js object to this @Component so here we store some information which will be used as a metadata(a set of data that describes and gives information about other data) in the background which wil tell Angular what to do with this class. The object consists of 
selector : the html tag by which we'll be able to use this component later. 
templateUrl : './server.component.html' the html file the component points to. Path should be relative.
Then use @Component() export class ServerComponent() { //All your data here }.

What are modules?

Angular uses components to build web pages, and uses modules to bundle different peices eg. components of ur apps into packages. Then mention the new component ServerComponent into declarations array in app.module.ts file. Also import ServerComponent from servers/server.component to let know typecscript what ServerComponent is.


Component Creation using CLI(best method) and using nesting

command - ng generate component nameHere OR ng g c nameHere // will make a folder nameHere and will give u all the basic files and their relations already filled up in the app.module.ts

Nesting - We can use one component html tag inside other and nest it. As long as they are related outside the folders through the file apps.module.ts

can use inline template using template: .. instead of templateUrl in the servers.component.ts
can use styleUrl or style the same way. Its an array so we can use multiple external stylesheets seperated by a comma


Data Binding

String interpolation --> {{}}
Property binding [property] = "data" 
event binding (event) = "expression"
Two way binding = [(ngModel)="data"]

Directives

The * in deirective tells that it is goin to change the structure of the html DOM
<p *ngIf = "property" else marker>If conditions is true this is displayed</p>;
<ng-template #marker><p>The else part is now shown here</p></ng-template>

<app-server *ngFor="let var of array"><app-server>

Unlike structural directives(ngIf), the attribute directives dont change the structure of the html so they dont have an asterix in front of them.

Attribute directives--> called within an [] .
[ngStyle]

eg. [ngStyle] = {'background-color': 'red'} if seperated by dash OR 
                {backgroundColor : 'red'} in camel case
                {backgroundColor : putColor()}
    [ngClass] = {classname: condition}
    
    