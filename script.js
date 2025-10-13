let number1;
let operator;
let number2;
let result;

function operate(number1, operator, number2){
    switch(operator){
        case "+":
            return number1+number2;
        case "-":
            return number1-number2;
        case "x":
            return number1*number2;
        case ":":
            return number1/number2;
    }
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if(result){
            clearAll();
        }
        display.value += button.textContent;
    })
})

operators.forEach(button => {
    button.addEventListener("click", () =>{
        if(display.value === "") return;

        if(number1 !== undefined && operator){
            number2 = parseFloat(display.value);
            number1 = parseFloat(operate(number1, operator, number2).toFixed(2));
            display.value = number1;
        } else {
            number1 = parseFloat(display.value);
        }
        display.value = "";
        operator = button.textContent;
    })
})

equal.addEventListener("click", () =>{
    if(number1 !== undefined && operator !== undefined){
        number2 = parseFloat(display.value);
        display.value = parseFloat(operate(number1, operator, number2).toFixed(2));
        result = display.value;
        if(display.value === "Infinity"){
            display.value = "not by 0, dumbass";
            result = display.value;
        }
    }
})


clear.addEventListener("click", () => clearAll());


function clearAll (){
    display.value = "";
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    result = undefined;
}



