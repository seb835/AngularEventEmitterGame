import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  clockFired(event) {
    if (event.intervalCounter % 2 === 1) {
      this.oddNumbers.push(event.intervalCounter);
    } else {
      this.evenNumbers.push(event.intervalCounter);
    }
  }
}
