function Result(){
    debugger
    let mark1 = Number(prompt("Enter your mark1"));
    let mark2 = Number(prompt("Enter your mark2"));
    let mark3 = Number(prompt("Enter your mark3"));
    let mark4 = Number(prompt("Enter your mark4"));
    let mark5 = Number(prompt("Enter your mark5"));
    if(mark1<35 || mark2<35 || mark3<35 || mark4<35 || mark5>=35){
        console.log("Fail");
    }
    else{
        console.log("Pass");
    }
}

function Highestmark(){
    let mark1 = Number(prompt("Enter your mark1")); // Number("45"); ==> 45
    let mark2 = Number(prompt("Enter your mark2"));
    let mark3 = Number(prompt("Enter your mark3"));
    if(mark1 > mark2 && mark1>mark3){
        console.log("Mark 1 is greater value");
    }
    else if(mark2 > mark1 && mark2>mark3){
        console.log("Mark 2 is greater value");
    }
    else{
        console.log("Mark 3 is greater value");
    }
}

function GradingSystem(){
    let mark = Number(prompt("Enter you mark"));
    if(mark<=100){
        if(mark >=90){
        console.log("A");
        }
        else if(mark >=80){
            console.log("B");
        }
        else if(mark >=70){
            console.log("C");
        }
        else if(mark >=60){
            console.log("D");
        }
        else if(mark >=50){
            console.log("E");
        }
        else{
            console.log("F");
        }
    }
    else{
        console.log("Enter the valid mark");
    }
}
function LoginCheck(){
    let UserValue = prompt("Enter your username/Mobile num/email id");
    let password = prompt("Enter your password");
    if((UserValue == "adminuser" || UserValue == "9095668805" || UserValue == "admin@gmail.com") && password == "admin@123"){
        console.log("Welcome user");
    }
    else{
        console.log("Invalid user name or password");
    }
}
function Color(){
    let color = prompt("Enter the day");
    if(color != "blue"){
        console.log("I'm okay with this color");
    }
    else{
        console.log("Not Okay");
    }
}

function Calculation(){
    let number1 = Number(prompt("Enter your Number1"));
    let number2 = Number(prompt("Enter your Number2"));
    let operation = prompt("Add/Sub/Mult/Div");
    switch(operation){
        case "Add": // operation == "Add"
            console.log(number1 + number2);
            break;
        case "Sub":
            console.log(number1-number2);
            break;
        case "Mult": // operation == "Add"
            console.log(number1 * number2);
            break;
        case "Div":
            console.log(number1/number2);
            break;
        default:
            console.log("Enter the valid number and operation");
    }
}

// Result();
// Highestmark();
// GradingSystem();
// LoginCheck();
// Color();
Calculation();