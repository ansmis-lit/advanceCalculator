function evaluate(input){
     try{
                       str= eval(input);
                        document.querySelector("#text-output").innerHTML= str;
                    }
                    catch(e){
                        document.querySelector("#text-output").innerHTML= "";
                    }
}
var numbers = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");
var str ="";
Array.prototype.forEach.call(numbers,function(number){
                             number.onclick = addStr;
                             })
Array.prototype.forEach.call(operator,function(operator){
                             operator.onclick = startCalc;
                             })
function addStr(e){
    str = str+""+e.target.innerHTML;
    document.querySelector("#text-output").innerHTML = str;
    console.log(str);
}
function startCalc(e){
    value = e.target.innerHTML
    if(value == "="){
        str = eval(str);
    }
   
    else{
        if(!isNaN(str.charAt(str.length-1)) ||str.charAt(str.length-1)==")")
            str = str+""+e.target.innerHTML;
    }
    document.querySelector("#text-output").innerHTML = str;
    console.log(str);
}
var clear = document.querySelector("#clear");
clear.onclick = function(){
    str = "";
    document.querySelector("#text-output").innerHTML = str;
}
var backspace = document.querySelector("#backspace");
backspace.onclick = function(){
    str = str.substring(0, str.length-1);
    document.querySelector("#text-output").innerHTML = str;
}
var sign = document.querySelector("#sign");
sign.onclick = function(){
    var i=1,char1,char2,val=str.substring(str.length-i, str.length);
    while(!isNaN(val) && eval(val)>0 && i <=str.length){
        i++;
        val=str.substring(str.length-i, str.length);
    }
    i--;
    char1 = str.charAt(str.length-i-1);
    char2 = str.charAt(str.length-i-2);
    if((i==str.length||!isNaN(char2))&&i!=0){
    str =str.substring(0, str.length-i) + "(-"+ str.substring(str.length-i, str.length)+")";
    document.querySelector("#text-output").innerHTML = str;
    }
}
var output = document.querySelector("#text-output");
