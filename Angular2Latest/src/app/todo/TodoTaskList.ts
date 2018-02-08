import { Component } from '@angular/core';
import {Todo}  from "./Todo";


@Component({
  selector: 'tasklist',
  templateUrl: './TaskList.html'
})
export class TaskList {
    todoList:Todo[]=[];

    constructor(){
        this.todoList.push(new Todo("Buy Sugar","Pending"));
        this.todoList.push(new Todo("Buy Water","Pending"));
        this.todoList.push(new Todo("Buy Wheat","Pending"));
    }
}



