var str = "Welcome to Javascript Programming";
str.split("").forEach(function(val){
    var hashMapVowel={
        a:true,
        e:true,
        i:true,
        o:true,
        u:true
    }
    if(val in hashMapVowel){
        console.log(val);
    }else{
        console.log("Not a Vowel")
    }
});