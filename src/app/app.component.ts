import { Component, OnInit } from '@angular/core';
import { GetTodoService } from './service/get-todo.service';
import { ItodoItem } from './models/todoModel';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public todos: ItodoItem = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: GetTodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe({
      next: (response:ItodoItem) => {
        this.todos = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    })
  };

}
