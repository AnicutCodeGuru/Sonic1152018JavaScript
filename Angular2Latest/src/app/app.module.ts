import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Counter} from "./counter/counter";
import {Clock} from "./clock/clock";
import {TaskList} from "./todo/TodoTaskList";

@NgModule({  
  declarations: [
    AppComponent,
    Counter,
    Clock,
    TaskList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
