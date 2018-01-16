// Constructor function
function Person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
}


var ravi = new Person("Ravi","Katakam",20);  // Instances
var ragu = new Person("Ragu","Prasad",25);
console.log(ravi,ragu);
