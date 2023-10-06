import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItodoItem } from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class GetTodoService {

  constructor(private http: HttpClient) { }

  public getTodo(): Observable<ItodoItem> {
    return this.http.get<ItodoItem>('https://jsonplaceholder.typicode.com/todos');
  };

}
