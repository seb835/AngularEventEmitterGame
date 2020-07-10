import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef = null;
  intervalCounter: number = 0;

  @Output() clock: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.intervalRef = setInterval(() => {
      this.onClock();
    }, 1000);
  }

  onStop(){
    clearInterval(this.intervalRef);
    this.intervalRef = null;
  }

  onClock() {
    const obj = {
      intervalCounter: this.intervalCounter,
      dateOf: new Date()
    }
    this.intervalCounter++;
    this.clock.emit(obj);
  }

}
