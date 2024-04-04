const fs = require("fs");
let str = fs.readFileSync("preke.json").toString();

let preke = JSON.parse(str);

console.log(preke.pavadinimas);