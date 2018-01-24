/**
 * Closure is an approach in Javascript where we retain state of a function even after its execution.
 * The benefit of clousers is we can implement dynamic programming.
 */

 function counterCreator(incrementBy){
     var count =0;
    return function(){
         count+=incrementBy;
         return count;
     }
 }

 var incrementBy1 = counterCreator(1);
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());
console.log( incrementBy1());


var incrementBy2 = counterCreator(2);
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());
console.log( incrementBy2());





