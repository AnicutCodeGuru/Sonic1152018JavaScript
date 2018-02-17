import { Component } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.html'
})
export class Spinner {
     spinnerValue:number=23;

     increment(){
       this.spinnerValue++;
     }
     decrement(){
       this.spinnerValue--;
     }
}
