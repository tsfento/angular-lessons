import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onIntervalEvent(num: number) {
    if (num % 2 === 0) {
      this.evenNums.push(num);
    } else {
      this.oddNums.push(num);
    }
  }
}
