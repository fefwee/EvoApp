import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/postModel';
import { RoleModelService } from 'src/app/services/role-model.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  public posts: IPost[] = [];

  constructor(private roleModelService: RoleModelService,) { }

  ngOnInit(): void {
    this.roleModelService.getPost().subscribe({
      next: (post: IPost[]) => {
        this.posts = post;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    })
  }
}
