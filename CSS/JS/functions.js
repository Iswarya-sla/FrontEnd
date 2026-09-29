function Welcome(){
    console.log("Welcome");
}
function Calculation(number1,number2,operation){ // a= num1, b=num2
    switch(operation){
        case "Add": // operation == "Add"
            return number1 + number2;
            break;
        case "Sub":
            return number1-number2;
            break;
        case "Mult": // operation == "Add"
            return number1 * number2;
            break;
        case "Div":
            return number1/number2;
            break;
        default:
            console.log("Enter the valid number and operation");
    }
}

let LoginFunction = function(){
    console.log("Login page");
}

let DemoFunction = (a)=>{console.log(a*a)};

function CallbackFunction(callback,a,b,c){ // callback = Calculation
    debugger
    console.log("Calculatotor");
    console.log(callback(a,b,c)); // Calculation();
}

// Welcome();
let num1=Number(prompt("Enter your number 1"));
let num2 = Number(prompt("Enter your number2"));
let operation = prompt("Add/Sub/Mult/Div");
// let result = Calculation(num1,num2,operation);
// console.log(result);
// LoginFunction();
// DemoFunction(5);
CallbackFunction(Calculation,num1,num2,operation);