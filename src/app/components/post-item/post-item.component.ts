import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/postModel';
import { RoleModelService } from 'src/app/services/role-model.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  private id!: number;
  public detailPost: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private roleModelService: RoleModelService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.roleModelService.getPostId(this.id).subscribe({
      next: (post: IPost) => {
        this.detailPost = post;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    })
  }


}
