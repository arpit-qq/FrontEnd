console.log("Sr.No. 1");
import fs from "fs/promises";
fs.readFile("sample.txt","utf8")
    .then((response)=>{
        console.log("Sr.no. 2");
        console.log("Response received");
        console.log(response);
    })
    .catch((error)=>{
        console.error("Error reading the file: ",error.message)
    });
console.log("Sr.no. 3");
