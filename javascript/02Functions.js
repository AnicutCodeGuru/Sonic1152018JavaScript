/**
 * Function to add 2 numbers
 */

 function Add(a,b){
    console.log(a+b);
 }

 console.log(Add.length); // Logs number parameters supported.

 Add(2,4); // Simple way of calling a function.
 Add.call(null,5,2);  
 Add.apply(null,[2,9]);

(function(){
    for(var i=1;i<=10;i++){
        console.log("7 X "+i+ " = "+ 7*i)
    }
})()   // Anonymous function





