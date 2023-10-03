import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;
  num: number = 0;
  // @Output('incNumber') incrementNumber = new EventEmitter<{incNum: number}>();


  onStart() {
    this.interval = setInterval(() => {
      this.intervalEvent.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
