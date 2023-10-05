import { Component } from '@angular/core';
import { EMPTY, Subscription, interval, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public evenIntervalSubscrip$: Subscription = Subscription.EMPTY;
  public randomIntervalSubscrip$:Subscription = Subscription.EMPTY;;

  public evenNumbers: number[] = [];
  public randomNumbers: string[] = [];

  public start(): void {
    this.evenNumber();
    this.enableMapRandom();
  };

  public evenNumber(): void {
    if(!this.evenIntervalSubscrip$.closed){
      return;
    }
    const evenInterval = interval(2000);
    this.evenIntervalSubscrip$ = evenInterval.subscribe((next) => {
      this.evenNumbers.push(next);
    });
  }

  public enableMapRandom(): void {
    if(!this.randomIntervalSubscrip$.closed){
      return;
    }
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