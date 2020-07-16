import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.Component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'Offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor(){
    if(this.serverStatus === 'online'){
      return 'green';
    }else{
      return 'red';
    }
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
