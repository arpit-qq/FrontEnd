console.clear();
const prompt = require('prompt-sync')();
// const/let/var
const store = "Rehman Store";
console.log(store);

// store = "Rockey Store";

// let item1 = "Mobile";
// let item2 = "Shoes";
// inventory
let items = ["item1", "item2", "item3"];
let prices = [2000, 5000, 3000];

items.push("item4", "item5");
console.log(items.length);
console.log(items);

// customer oriented billing
console.log("Billing System");
prices.push(3000, 3500);
console.log();
console.log("SrNo.\t","Item\t","Price");
for(let i=0; i<items.length; i++){
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();
let SrNo = Number (prompt("Enter Item No. : "));
let Quantity = Number (prompt("Enter Quantity : "));

// billing
let price = prices[SrNo - 1];
let cost = price * Quantity;
let discount = 0;

if (cost >= 5000) {
    discount = cost * 0.05;
}
else if (cost >= 2000) {
    discount = cost * 0.02;
}
else {
    discount = cost * 0.01;
}
console.log("Your discount is :", discount);
console.log("Your Bill Amount is :", cost - discount);
console.log();
