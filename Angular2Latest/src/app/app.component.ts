import { Component } from '@angular/core';
import {Counter} from "./counter/counter";
import {Clock} from "./clock/clock";
import {TaskList} from "./todo/TodoTaskList";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular 2'; 
  age=25; 
}
