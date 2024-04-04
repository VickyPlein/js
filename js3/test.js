// Failo nuskaitymas
const fs = require("fs");
const input = fs.readFileSync(process.argv[2]).toString().split("\r\n");


const n = input.length;
for (let i = 0; i < n; i++) {
    let eilute = input[i].split(" ");
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${eilute[y]} `;
    }
    console.log(s);
}
/*
console.log("---------------");
for (let i=0; i<n; i++){
    let s="";
    for (let y=0; y<n; y++){
        s+=`${mas2d[y][i]} `;
    }
    console.log(s);
}*/