import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengComponent } from './primeng/primeng.component';
import { NotiflixComponent } from './notiflix/notiflix/notiflix.component';

const routes: Routes = [
  {
    path: 'primeng',
    component: PrimengComponent
  },
  {
    path: 'notiflix',
    component: NotiflixComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
