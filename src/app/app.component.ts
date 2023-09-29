import { Component } from '@angular/core';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public evenIntervalSubscrip$!: Subscription;
  public randomIntervalSubscrip$!: Subscription;

  public evenNumbers: number[] = [];
  public randomNumbers: string[] = [];

  public start(): void {
    this.evenNumber();
    this.enableMapRandom();
  };

  public evenNumber(): void {
    const evenInterval = interval(2000);
    this.evenIntervalSubscrip$ = evenInterval.subscribe((next) => {
      this.evenNumbers.push(next);
    });
  }

  public enableMapRandom(): void {
    const interval$ = interval(2000);
    this.randomIntervalSubscrip$ = interval$.pipe(
      map(() => `Random Value ${Math.floor(Math.random() * 100)}`)
    ).subscribe((next) => {
      this.randomNumbers.push(next);
    })
  };

  public enableMapRandomUnsubscribe() {
    this.randomIntervalSubscrip$.unsubscribe()
  }

  public evenNumberUnsubscribe() {
    this.evenIntervalSubscrip$.unsubscribe()
  }
}
