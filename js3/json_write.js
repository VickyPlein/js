const fs = require("fs");

const preke = {
    pavadinimas: "Televizorius",
    kaina: 600,
    spalva: "Juoda"
};
console.log(preke);
console.log(typeof preke);

const str = JSON.stringify(preke);

console.log(str);
console.log(typeof str);

fs.writeFileSync("preke.json", str);