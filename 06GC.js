function reverse(str){
    var revStr = str.split("").reverse().join("");

    return revStr
   
}
console.log(reverse("Javascript"));

/**
 * If a function returns undefined or null or premitive datatypes like number , string , boolean then the gc will 
 * clean up the declared variables and free memory of that function.
 */

 /**
  * In case if the function returns an Object or a function then the variables will not be released form the memory.
  example below.
  */

  function Person(fname,lname){
     var name = fname + " " + lname;
     return {
         getName:function(){
             return name;
         }
     }
  }

  var p1 =  Person("Ravi" , "Kumar");
  console.log(p1.getName());


  






