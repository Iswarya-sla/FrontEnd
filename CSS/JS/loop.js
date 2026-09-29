function Forloop(){
    for(var i=1;i<=5;i++){
        console.log(i);
    }
}

function GradingSystem(){
    for(let student=1;student<=5;student++){
        for(let sub=1;sub<=3;sub++){
        let mark = Number(prompt("Enter your mark"+ sub));
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
    }
}

function WhileLoop(){
    let status = "Not win";
    while(status != "win"){
        status = prompt("Enter your game status");
    }
    console.log("Won the match");
}

function DoWhileLoop(){
    let atnper = 0;
    do{
        let status = prompt("Present or Absent");
        if(status == 'Present'){
            if(atnper == 0 || atnper == 100){
                atnper = 100;
            }
            else{
                atnper = atnper+(atnper*0.5/10);
            }
        }
        else if(status == 'Absent'){
            if(atnper == 0){
                atnper = 0;
            }
            else{
                atnper = atnper-(atnper*0.5/10);
            }
        }
        console.log("Your percentage is",atnper);
    }while(atnper>=70);
    console.log("You are Blocked");
}
function Values(){
    let num = 0;
    do{
        console.log(num);
    }while(num > 5);
}

function NestedLoop(){
    for(let i=1;i<=3;i++){
        for(let j=0;j<=5;j++){
            console.log(i+","+j);
        }
        console.log("Completed"+i);
    }
}

function BreakAndContinue(){
    for(let i=1;i<=100;i++){
        if(i%5 == 0){
            continue;
        }
        console.log(i);
    }
}

// Forloop();
// GradingSystem();
// WhileLoop();
// DoWhileLoop();
// Values();
// NestedLoop();
BreakAndContinue();