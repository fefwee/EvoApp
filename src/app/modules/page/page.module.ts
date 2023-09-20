import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
