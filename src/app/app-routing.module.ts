import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { DetailsComponent } from './components/item/item-details/details/details.component';
import { ListComponent } from './components/item/item-details/list/list.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },

]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
