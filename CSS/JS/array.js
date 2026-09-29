function ArrayFunction(){
    // let Names = ["A","B","C","D","E"];
    let Names = [];
    Names[0] = "A";
    Names[1] = "B";
    Names[2] = "C";
    Names[3] = "D";
    Names[4] = "E";
    Names[5] = "D";
    Names.push("F");
    console.log(Names);
    Names.pop();
    console.log(Names);
    Names.unshift("O");
    console.log(Names);
    Names.shift();
    console.log(Names);
    console.log(Names.lastIndexOf("D"));
    console.log(Names.includes("E"));
}
// ArrayFunction()

function AdvancedArray(){
    debugger
    let Salary = [20000,45000,34000,56000,54500,23225];
    // let UpdatedSalary = Salary.map(salary=>salary+5000);
    // let UpdatedValue = 0;
    // for(let i=0;i<Salary.length;i++){
    //         UpdatedValue += Salary[i];
    // }
    let UpdatedSalary = Salary.filter(salary=>salary >= 40000);
    UpdatedSalary = UpdatedSalary.map(sal=>sal+5000);

    let UpdatedValue = Salary.reduce((a,b)=>a+b,0);
    console.log(UpdatedValue);
}
// AdvancedArray();

function SliceAndSplice(){
    let Salary = [20000,45000,34000,56000,54500,23225];
    let result = Salary.slice(1,5);
    console.log(result);
    let Names = ["A","B","C","D","E"];
    Names.splice(1,0,"I");
    console.log(Names);
    Names.splice(4,1,"M");
    console.log(Names);
    Names.splice(1,3);
    console.log(Names);
}
// SliceAndSplice();

function ArrayFunctions(){
    let frontend = ["HTML","CSS"];
    let backend = ["Node.js","Express"];
    let Fullstack = frontend.concat(backend);
    console.log(Fullstack.join("-"));
    // console.log(Fullstack.findIndex(x=>x=="Express"));
    let Salary = [20000,45000,34000,76000,54500,23225];
    console.log(Salary.some(x=>x>70000));
    console.log(Salary.some(x=>x>70000));
    console.log(Salary.sort((a,b)=>a-b));
    console.log(Salary.reverse());
}
// ArrayFunctions();

function Swap(){
    let a = 23;
    let b = 35;
    let temp = a; // temp = 23
    a = b; // b = 35
    b = temp; // b = 23
    console.log(b);
    console.log(a);
}

function SortUsingLoop(){
    let Salary = [10,4,3,7,2];
    for(let i=0;i<Salary.length;i++){
        for(let j=i+1;j<Salary.length;j++){
            if(Salary[i]>Salary[j]){
                let temp = Salary[i];
                Salary[i] = Salary[j];
                Salary[j] = temp;
            }
        }
    }
    console.log(Salary);
}
SortUsingLoop();