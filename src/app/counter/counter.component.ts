import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public count = 0;

  public incrementCount() {
    return this.count++
  };

  public decrementCount() {
    return this.count--
  };

}
