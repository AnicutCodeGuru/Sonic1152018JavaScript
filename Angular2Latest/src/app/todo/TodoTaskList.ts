import { Component } from '@angular/core';
import {Todo}  from "./Todo";


@Component({
  selector: 'tasklist',
  templateUrl: './TaskList.html'
})
export class TaskList {
    todoList:Todo[]=[];
    taskName:string="";

    constructor(){
        this.todoList.push(new Todo("Buy Sugar","Pending"));
        this.todoList.push(new Todo("Buy Water","Pending"));
        this.todoList.push(new Todo("Buy Wheat","Pending"));
    }

    createTask(){
        this.todoList.push(new Todo(this.taskName,"Pending"));
        this.taskName=""
    }

    completeTask(task:Todo){
        task.taskStatus="Completed"        

    }
    deleteTask(index:number){
        this.todoList.splice(index,1);

    }
}



