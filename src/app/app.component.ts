import { Component } from '@angular/core';

interface Book {
  nameBook: string
  auctor: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public addNewBook: Book = {
    nameBook: '',
    auctor: ''
  };

  public books: Book[] = [
    {
      nameBook: 'Убить пересмешника',
      auctor: 'Харпер Ли'
    },
    {
      nameBook: 'Гордость и предубеждение',
      auctor: 'Джейн Остен'
    },
    {
      nameBook: 'Дневник Анны Франк',
      auctor: 'Анна Франк'
    }
  ];


  public addBook() {
    this.books.push({
      nameBook: this.addNewBook.nameBook,
      auctor: this.addNewBook.auctor
    })
  };

}
