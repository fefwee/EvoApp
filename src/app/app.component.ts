import { Component } from '@angular/core';
import { RequestDataService } from './services/request-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private requestDataService: RequestDataService) { }

  public getPosts() {
    this.requestDataService.getAllPosts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  public getComments() {
    this.requestDataService.getCommentsWitchParams().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  public sendBodyParam() {
    this.requestDataService.sendPost().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  public errors() {
    this.requestDataService.getPostError().subscribe({
      next: (response) => { },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log(error.message);
        }
      }
    })
  }
  public sendHeaders() {
    this.requestDataService.getSendHeaders().subscribe({
      next: (response) => {
        console.log('headers с параметром X-Test:1 и текстовый формат', response);
      }
    })
  }

  public removePost() {
    this.requestDataService.deletePost().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

}
