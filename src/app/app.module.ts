import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './cmps/todo-list/todo-list.component';
import { TodoPreviewComponent } from './cmps/todo-preview/todo-preview.component';
import { TodoEditComponent } from './cmps/todo-edit/todo-edit.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoPreviewComponent,
    TodoEditComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
