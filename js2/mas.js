/*let mas = [];
for (let i = 1; i < 10; i++) {
    mas.push(i);
}

mas.forEach((x, i) => {
    console.log(`${i} => ${x}`);
});
*/

/*let temp = [5, 6, 2, 3, 4, 6, 7];

let suma = 0;
let kiekis = 0;
temp.forEach((x) => {
    suma += x;
    kiekis++;
});

console.log(`Vidurkis : ${suma / kiekis} `);
*/
let men = [[5, 6, 2, 3, 4, 6, 7], [5, 6, 2, 3, 4, 6, 7], [5, 6, 2, 3, 4, 6, 7]];
//console.log(temp[0][2]);//


let suma = 0;
let kiekis = 0;
men.forEach((sav) => {
    let savSuma = 0;
    let savKiekis = 0;
    sav.forEach((diena) => {
        savSuma += diena;
        savKiekis++;
    });
    suma += savSuma;
    kiekis += savKiekis;
    console.log(`Savaites vidurkis: ${savSuma / savKiekis}`);
});

console.log(`${suma / kiekis}`);