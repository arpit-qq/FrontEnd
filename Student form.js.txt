console.clear();

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter number of students: "));
let students = [];
let marksBase = [];

for (let i = 0; i < n; i++) {
    console.log(`\nEnter Details of Student ${i + 1}`);
    let id = parseInt(prompt("Enter ID: "));
    let name = prompt("Enter Name: ");
    let dbms = parseInt(prompt("Enter DBMS Marks: "));
    let fee = parseInt(prompt("Enter FEE Marks: "));
    let cgpa = parseFloat(prompt("Enter CGPA: "));
    
    let student = {id,name,cgpa};
    let sMarks = {id,dbms,fee};

    marksBase.push(sMarks);
    students.push(student);
}



function fAverage(dbmsMarks, feeMarks) {
    return (dbmsMarks + feeMarks) / 2;
}

// Grade Function
function fGrade(average) {

    if (average >= 90)
        return "O";
    else if (average >= 80)
        return "A+";
    else if (average >= 70)
        return "A";
    else if (average >= 60)
        return "B";
    else
        return "F";
}



let srNo = 1;
console.log("\nSrNo\tID\tName\tDBMS\tFEE\tAverage\tGrade");

for (let element1 of students) {

    let dbms = 0;
    let fee = 0;
    let average = 0;
    let grade = "";

    for (let element2 of marksBase) {

        if (element1.id == element2.id) {

            dbms = element2.dbms;
            fee = element2.fee;

            average = fAverage(dbms, fee);
            grade = fGrade(average);

            break;
        }
    }

    console.log(
        `${srNo}\t${element1.id}\t${element1.name}\t${dbms}\t${fee}\t${average}\t${grade}`
    );
    srNo++;
}
