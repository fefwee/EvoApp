import { PreItemResolver } from './resolver/pre-item-resolver.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: 'item',
    component: ItemComponent,
    resolve: {
      preItemResolver: PreItemResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
