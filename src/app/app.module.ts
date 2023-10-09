import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RoleModelService } from './services/role-model.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { roleAccessGuard } from './guards/role-access.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent,
    PostItemComponent,
    ErrorPageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MenubarModule,
    SelectButtonModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule
  ],
  providers: [RoleModelService, {
    provide:
      'roleAccessGuard',
    useValue:
      roleAccessGuard
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
