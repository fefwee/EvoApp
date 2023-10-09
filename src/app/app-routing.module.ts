import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { roleAccessGuard } from './guards/role-access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostPageComponent,
  },
  {
    path: 'post/:id',
    component: PostItemComponent,
    canActivateChild: [roleAccessGuard],
    children: [
      {
        path: 'edit',
        component: EditPageComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
