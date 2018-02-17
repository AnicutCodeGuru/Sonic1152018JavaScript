import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Counter} from "./counter/counter";
import {Clock} from "./clock/clock";
import {TaskList} from "./todo/TodoTaskList";
import {Spinner} from "./NumberSpinner/spinner";


import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'todo', component: TaskList },
  { path: 'counter',      component: Counter },
  { path: 'clock',      component: Clock },
  { path: 'spinner',      component: Spinner },
  { path: '**', component: TaskList }
];


@NgModule({  
  declarations: [
    AppComponent,
    Counter,
    Clock,
    Spinner,
    TaskList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
       appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
