import { RoleModelService } from 'src/app/services/role-model.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface IOptions {
  label: string
  value: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public roleModelService: RoleModelService) { }


  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Главная',
        routerLink: '/'
      },
      {
        label: 'Страница постов',
        routerLink: 'posts'
      }
    ];
  }



}
