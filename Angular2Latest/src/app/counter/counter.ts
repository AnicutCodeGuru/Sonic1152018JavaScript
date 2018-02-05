import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class Counter {
     counter:number=0;

     increment(){
       this.counter++;
     }
}
