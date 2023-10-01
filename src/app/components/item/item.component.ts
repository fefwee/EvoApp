import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/resolver/pre-item-resolver.resolver';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: ({ preItemResolver }) => {
        this.post = preItemResolver;
      }
    })
  };
}
