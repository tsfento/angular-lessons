import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .fifthClick {
      color: white;
    }
  `]
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver', 'Testserver 2'];

  username: string = '';
  notEmpty: boolean = false;

  secretVisible: boolean = false;
  clicks: number[] = [];
  clickNumber: number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  logClicks() {
    // this.secretVisible = !this.secretVisible;
    this.clickNumber++;
    this.clicks.push(this.clickNumber);
  }

  setColor() {
    return this.clicks.length >= 5 ? 'blue' : 'white';
  }
}
