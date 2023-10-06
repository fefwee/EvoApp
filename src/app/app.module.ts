import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTodoService } from './service/get-todo.service';
import { CommonModule } from '@angular/common';
import { TodoInterceptor } from './interceptor/todo-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [GetTodoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TodoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
