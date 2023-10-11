import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoState } from './store/todo.state';
import { AddTodo, TodoInterface } from './store/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public todos: TodoInterface[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(TodoState.getTodo).subscribe({
      next: (todo: TodoInterface[]) => {
        this.todos = todo;
      }
    })
  }

  public createTodo = {
    title: null,
  };

  public addTodo() {
    this.store.dispatch(new AddTodo({ todoTitle: this.createTodo.title }));
  };
}
