import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
       color: white;
      }
  `]
})
/*String interpolation */
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';
  // Consrtuctor is just a method called once the component is called at the start
  constructor() {
    this.serverStatus = Math.random() > 0.5? 'online': 'offline';
  }
  getServerStatus () {
    return this.serverStatus;
  }

  changeColor() {
    return this.serverStatus === 'online'? 'green': 'red';
  }
}
