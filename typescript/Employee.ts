import Person from "./Person";

class Employee extends Person{
    empID:number;
    salary:number;
    static count:number=0;
    constructor(fname:string,lname:string,age:number,empID:number,salary:number=6000){ 
        super(fname,lname,age);
        this.empID = empID;
        this.salary=salary;
        Employee.count++;
        console.log(Employee.count);
    }
}

var emp = new Employee("Govindarajan","Nedu",40,1001,10000);
console.log(emp);

var emp2 = new Employee("Das","Debashis",40,1001);
console.log(emp2);


