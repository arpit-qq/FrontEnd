console.clear();
    
const prompt = require('prompt-sync')();

console.log("\nEnter Student Details");

let students = [];
m
let id = parseInt(prompt("Enter Id : "));
let name = prompt("Enter Name : ");
let cgpa = parseFloat(prompt("Enter CGPA : "));

let student = { id, name, cgpa };
students.push(student);

console.log("Master Entry Completed");

let [a] = students;

console.log(`\nId : ${a.id}`);
console.log(`Name : ${a.name}`);
console.log(`CGPA : ${a.cgpa}`);

console.log("\nNow Update MarksBase");

let marksBase = [];

let idValue = parseInt(prompt("Enter Id : "));
let dbmsMarks = parseInt(prompt("Enter DBMS Marks : "));
let feeMarks = parseInt(prompt("Enter FEE Marks : "));

let sMarks = {
    id: idValue,
    dbms: dbmsMarks,
    fee: feeMarks
};

marksBase.push(sMarks);

function fAverage(dbms, fee) {
    return (dbms + fee) / 2;
}

function fGrade(average) {
    if (average >= 90)
        return "O";
    else if (average >= 80)
        return "A";
    else if (average >= 70)
        return "B";
    else
        return "F";
}

let srNo = 1;

console.log("\nSrNo\tId\tName\tDBMS\tFEE\tAvg\tGrade");

for (let element1 of students) {
    for (let element2 of marksBase) {
        if (element1.id === element2.id) {

            let dbms = element2.dbms;
            let fee = element2.fee;

            let average = fAverage(dbms, fee);
            let grade = fGrade(average);

            console.log(
                `${srNo}\t${element1.id}\t${element1.name}\t${dbms}\t${fee}\t${average}\t${grade}`
            );

            srNo++;
            break;
        }
    }
}