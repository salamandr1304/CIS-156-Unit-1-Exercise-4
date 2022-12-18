console.log("Let's convert some numbers!");
let miles = prompt("Enter a number of miles:");
let kilometers = prompt("Enter a number of kilometers:");
miles = parseInt(miles);
kilometers = parseInt(kilometers);

let k = miles*1.609344;
let m = kilometers/1.609344;

k = k.toFixed(2);
m = m.toFixed(2);

console.log(" ");
console.log("-------Results-------");
console.log(miles + " miles is " +k+ " kilometers.");
console.log(kilometers + " kilometers is " +m+ " miles.")