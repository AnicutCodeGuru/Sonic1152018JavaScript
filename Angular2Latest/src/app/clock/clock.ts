import { Component } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.html'
})
export class Clock {
     time:string=new Date().toLocaleTimeString();

     constructor(){
       setInterval(()=>{
         this.updateTime();
       },1000) 
     }

     updateTime(){
       this.time=new Date().toLocaleTimeString();
     }
}
