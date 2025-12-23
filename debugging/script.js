const { parse } = require("path");

function performOperation() {
    let num1=parseInt(document.getElementById("input1").value,10);
    let num2=parseInt(document.getElementById("input").value,10);
    if(!NaN(num1)&&!NaN(num2)){
        let result=multiply(num1,num2);
            displayResult(result);

    }else{
        displayResult("Please return valid result");
    }
    function multiply(a,b){
        debugger;
        return a*b;
    }
    function displayResult(result){
        const resultelement=document.getElementById("result");
        resultelement.innerText=`The result is:${result}`;
    }
}