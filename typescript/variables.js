var fname = "Vijay";
var age = 34;
var isTrue = true;
var lname = null;
function add1(a, b) {
    var sum = a + b;
    if (sum > 0 && sum < 10) {
        var msg = "Between 1 and 10"; // This variable is accessable outside if condition
        var msg1 = "Between 1 and 10"; // This variable is accessable within if condition
        console.log(msg);
    }
    console.log(msg); // This prints the message 
    //console.log(msg1) // This variable is not accessable  
}
add1(2, 4);
/**
 * Any variable declared inside lexical scopes like if condition, while loop for loop , those variables
 * are accessable by there parent function. But variables declared with let key word are accessable only within
 * the lexical scope.
 *  *
 */
var PI = 3.14;
/**
 * const key word is used to  declare constants . The constant values cannot be modified.
 */
var person = {
    name: "Ragu",
    age: 34
};
console.log(person.name);
console.log(person.age);
Object.freeze(person);
person.age = 56;
console.log(person.age);
