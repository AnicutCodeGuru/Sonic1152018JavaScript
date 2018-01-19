var util ={
    date:{
        getLocaldate:function(){
            var dt = new Date();
            return  dt.toLocaleDateString();
        }
    },
    time:{
        getLocalTime:function(){
            return new Date().toLocaleTimeString();
        }
    },
    numbers:{
         getRandomNumber:function(){
            return Math.round(Math.random()*10);
         },
         toDecimal:function(value,toDecimal){
            return value.toFixed(toDecimal)
         }   
    }
}

console.log(util.date.getLocaldate());
console.log(util.time.getLocalTime());
console.log(util.numbers.getRandomNumber());
console.log(util.numbers.toDecimal(1.999986544,2));




