/* Kiekvienas masyvas yra objektas */
const fs = require("fs");

let data = fs.readFileSync("data.csv").toString().split(",");

console.log(data[2]);

let a = [3, 2];
console.log(typeof a);