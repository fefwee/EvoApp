import { Component } from '@angular/core';

interface IUser {
  name: string
  age: number
  id: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public date = new Date()
  public number = 0;
  public usersArray: IUser[] = [
    { name: 'John', age: 19, id: 1 },
    { name: 'Walter', age: 23, id: 2 },
    { name: 'Victor', age: 25, id: 3 },
    { name: 'Patric', age: 54, id: 4 },
    { name: 'Werner', age: 12, id: 5 },
  ]
}
