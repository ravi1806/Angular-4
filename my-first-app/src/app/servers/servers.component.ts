import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
//Property Binding
export class ServersComponent implements OnInit {
  allowNewServer = false;
  servernowStatus = "No server online"; //event binding
  newserverName = 'TestServer';
  servers = ['TestServer', 'TestServer2'];
  serverCreated = false; //for ngIf
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    } ,2000)
  }
  //event binding method
  onCreateServer() {
    this.servers.push(this.newserverName);
    this.serverCreated = true; // for ngIf
    this.servernowStatus = "Server is online now and its name is " + this.newserverName;
  }
  onUpdatingServerName(event: Event) {
    //console.log(event);
      //this.newserverName = event.target.value;// this wont work put any in front of event: in the parameters of the function to make it work
    this.newserverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}

/*
The example above casts the $event as an any type. That simplifies the code at a cost. There is no type information that could reveal properties of the event object and prevent silly mistakes.

  [...]

The $event is now a specific KeyboardEvent. Not all elements have a value property so it casts target to an input element.*/
