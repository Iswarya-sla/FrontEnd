function ObjectFunction(){
    let Students={
        id:1,
        name:"Iswarya",
        course:"Front end",
        marks: [45,55,56,54,98],
        welcome: function(){
            console.log("Welcome "+this.name);
        }
    }

    Students.course = "Dot net";
    Students.location = "Chennai";
    delete Students.id;
    console.log(Students);
    console.log(Students["marks"]);
}

// ObjectFunction();

function EmployeeDetails(){
    let Employees = [
        {
            id:1,
            name:"A",
            Department: "Dev"
        },
        {
            id: 2,
            name: "B",
            Department: "Test"
        },
        {
            id: 3,
            name: "C",
            Department: "Dev"
        }
    ]
    // Employees.forEach(employee=>{
    //     if(employee.Department=="Dev"){
    //         console.log(employee);
    //     }
    // })

    for(let employee of Employees){
        if(employee.Department == "Dev"){
            for(let key in employee){
                console.log(key,"=",employee[key]);
            }
        }
    }
}
EmployeeDetails();